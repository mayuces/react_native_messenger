import React, { useEffect, useMemo, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/base";
import { auth, db } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChatMessages() {
      try {
        const colRef = collection(db, "chats", id, "messages");
        const q = query(colRef, orderBy("timestamp", "desc"));

        const docsSnap = await getDocs(q);
        const chatMessages = [];

        docsSnap.forEach((doc) => {
          return chatMessages.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setChatMessages(chatMessages);

        setLoading(false);
      } catch (error) {
        console.log("chat messages couldnt fetched");
      }
    }

    fetchChatMessages();
  }, []);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.data.photoURL ||
            "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        {/* <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle> */}
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {!loading
            ? `${chatMessages?.[0]?.data.displayName || "say"} : ${
                chatMessages?.[0]?.data.message || "hi"
              }`
            : "loading"}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
