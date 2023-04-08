import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { AxiosProvider } from './src/context/AxiosContext';
import AuthStack from './src/navigation/AuthStack';
import Service from './src/services/Services';


export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <NavigationContainer initialRouteName="HomeScreen">
          <Service />
        </NavigationContainer>
      </AxiosProvider>
    </AuthProvider>
  );
}
