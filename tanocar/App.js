import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/authentication/LoginScreen';
import RegisterScreen from './src/screens/authentication/RegisterScreen';

export default function App() {
  return (
    <SafeAreaView>
      {/* <LoginScreen /> */}
      <RegisterScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
