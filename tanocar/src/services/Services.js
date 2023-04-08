import React, { useCallback, useContext, useEffect, useState } from "react";
import LoginScreen from "../screens/authentication/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import * as Keychain from "react-native-keychain";
import Spinner from "../components/Spinner";
import AuthStack from "../navigation/AuthStack";
import AdStack from "../navigation/AdStack";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Service = () => {
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState("loading");

    const loadJWT = useCallback(async () => {
        try {
            authContext.setAuthState({
                access: AsyncStorage.getItem('@storage_access') || null,
                refresh: AsyncStorage.getItem('@storage_refresh') || null,
                authenticated: AsyncStorage.getItem('@storage_authenticated') !== null,
            });
            setStatus("success");
        } catch (error) {
            setStatus("error");
            console.log(`Keychain Error: ${error.message}`);
            authContext.setAuthState({
                access: null,
                refresh: null,
                authenticated: false,
            });
        }
    }, []);

    useEffect(() => {
        loadJWT();
    }, [loadJWT]);

    if (status === "loading") {
        return <Spinner />;
    }

    if (authContext?.authState?.authenticated == false) {
        return <AuthStack />;
    } else {
        return <AdStack />;
    }
};

export default Service;
