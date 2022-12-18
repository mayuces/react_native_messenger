import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      hearBackTitle: "Chats",
    });
  }, []);

  const createChat = async () => {
    try {
      const formData = {
        chatName: input,
      };
      await addDoc(collection(db, "chats"), formData);

      navigation.goBack();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button onPress={createChat} title="Create new Chat" color="#25D366" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
