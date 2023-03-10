import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = async () => {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error)
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar style="light" />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://seeklogo.com/images/W/whatsapp-logo-8AE44BBBB0-seeklogo.com.png",
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <Button
        onPress={signIn}
        title="Login"
        containerStyle={styles.button}
        color="#25D366"
      />
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Register"
        containerStyle={styles.button}
        type="outline"
        titleStyle={{ color: "#25D366" }}
        buttonStyle={{ borderColor: "#25D366" }}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  button: {
    width: 200,
    marginTop: 10,
  },

  inputContainer: {
    width: 300,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
