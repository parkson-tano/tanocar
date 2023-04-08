import React, { createContext, useState } from "react";
import * as Keychain from "react-native-keychain";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);
const { Provider } = AuthContext;
const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        access: null,
        refresh: null,
        authenticated: null,
        password: null,
    });
    
    clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
        }

        console.log('Done.')
    }
    const logout = () => {
        clearAll();
        setAuthState({
            access: null,
            refresh: null,
            authenticated: false,
            password: null,
        });
    };

    const getAccessToken = () => {
        return authState.access;
    };

    return (
        <Provider
            value={{
                authState,
                getAccessToken,
                setAuthState,
                logout,
            }}
        >
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };
