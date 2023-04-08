import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/home/HomeScreen';
import NativeStackView from '@react-navigation/native-stack';
import NewAdScreen from '../screens/ads//NewAds';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="New Ads" component={NewAdScreen} />
            <Tab.Screen name="Auth" component={AuthStack} />
        </Tab.Navigator>
    );
}

const AdStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="Feed"
                component={HomeTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Create Ads" component={NewAdScreen} />
        </Stack.Navigator>
    )
}

export default AdStack