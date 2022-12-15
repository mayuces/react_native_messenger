import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  colors: {
    primary: '#25D366',
  },
  headerStyle: { backgroundColor: '#25D366'},
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
         name="Login" 
         component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
