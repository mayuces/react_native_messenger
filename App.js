import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  colors: {
    primary: "#25D366",
  },
  headerStyle: { backgroundColor: "#25D366" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
