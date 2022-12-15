import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Image, Input, Button } from '@rneui/base'


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {

  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' >
      <StatusBar style='light' />
      <Image
        style={styles.imageContainer}
        source={{
          uri:
            'https://cdn-icons-png.flaticon.com/512/124/124034.png?w=826&t=st=1671123292~exp=1671123892~hmac=51ec1799fd702d2ec56a965bc20be8ae200aa68966c5738efa231179ea9d2e69',
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
        />
      </View>

      <Button 
        title="Login" 
        containerStyle={styles.button}
        onPress={signIn}
        color= "#25D366"
      />
      <Button 
        title="Register"
        containerStyle={styles.button}
        type="outline"
        titleStyle={{ color: "#25D366" }}
        buttonStyle={{ borderColor: "#25D366" }}
      />
      <View style={{ height: 100 }}/>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  imageContainer: {
    width:150,
    height:150, 
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  imageContainer: {
    marginBottom: 100,
  },
});