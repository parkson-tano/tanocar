import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/authentication/LoginScreen';
import RegisterScreen from './src/screens/authentication/RegisterScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import NewAds from './src/screens/ads/NewAds';
export default function App() {
  return (
    <SafeAreaView>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <HomeScreen /> */}
      <NewAds />
    </SafeAreaView>
  );
}
