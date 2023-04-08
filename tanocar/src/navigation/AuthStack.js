import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/authentication/LoginScreen';
import RegisterScreen from '../screens/authentication/RegisterScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  )
}

export default AuthStack