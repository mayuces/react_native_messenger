import React, { useEffect, useMemo, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/base";
import { auth, db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  const fetchChatMessages = async () => {
    const colRef = collection(db, "chats", id, "messages");
    const q = query(colRef, orderBy("timestamp", "desc"));

    const docsSnap = await getDocs(q);

    const newChatMessages = [];

    docsSnap.forEach((doc) => {
      newChatMessages.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    console.log("====================================");
    console.log("chatmessages", newChatMessages);
    console.log("====================================");
    setChatMessages([...newChatMessages]);
  };

  useEffect(() => {
    fetchChatMessages();
  }, [chatMessages]);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
