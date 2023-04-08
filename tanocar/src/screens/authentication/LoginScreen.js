import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { Button, CheckBox } from '@rneui/themed';
import SocialButton from '../../components/SocialButton'
import axios from 'axios'
import { API_URL } from '../../api/index';
import { AuthContext } from '../../context/AuthContext';
import { AxiosContext } from "../../context/AxiosContext";
import * as Keychain from "react-native-keychain";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
    const deviceWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    const authContext = useContext(AuthContext);
    const { publicAxios } = useContext(AxiosContext);
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        remember: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState(false);
    // const handleChange = (name) => (event) => {
    //     setCredentials({ ...credentials, [name]: event.target.value });
    // };

    const handleChange = (name) => (value) => {
        setCredentials({ ...credentials, [name]: value });
    };
    const onLogin = async () => {
        setSubmit(true);
        try {
            const response = await axios.post(API_URL + "auth/login", {
                email: credentials.email,
                password: credentials.password,
            });
            const { access, refresh } = response.data;
            console.log(access, refresh);
            await AsyncStorage.setItem('@storage_access', access)
            await AsyncStorage.setItem('@storage_refresh', refresh)
            await AsyncStorage.setItem('@storage_authenticated', "true")
            authContext.setAuthState({
                access: AsyncStorage.getItem('@storage_access'),
                refresh : AsyncStorage.getItem('@storage_refresh'),
                authenticated: AsyncStorage.setItem('@storage_authenticated', 'true'),
                password: credentials.password,
            });

            
        } catch (e) {
            console.log(e);
            alert("Invalid Credentials");
            setSubmit(false)
        }
    };
    return (
        <View>
            <View style={styles.container}>
                <Text variant="headlineSmall" style={{ marginBottom: 50, textAlign: 'center' }}>
                    Login to TANOCAR
                </Text>
                <TextInput style={styles.input}
                    label="Email"
                    mode='outlined'
                    right={<TextInput.Icon icon="email" />}
                    value={credentials.email}
                    onChangeText={handleChange('email')}
                    disabled={submit}
                    
                />
                <TextInput style={styles.input}
                    label="Password"
                    mode='outlined'
                    secureTextEntry={showPassword}
                    right={<TextInput.Icon icon="eye" onPress={(event) => setShowPassword(!showPassword)} />}
                    value={credentials.password}
                    onChangeText={handleChange('password')}
                    disabled={submit}
                />
                <CheckBox
                    checked={checked}
                    title="Remember Me"
                    size={30}
                    onIconPress={() => setChecked(!checked)}
                    disabled={submit}
                    />


                <Button className="mb-10 bg-slate-500 p-1" onPress={onLogin} loading={submit}>
                    <Text className='text-2xl uppercase text-green-400 font-extrabold p-1'>
                        Login
                    </Text>

                </Button>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: 30,
                        marginTop: 30
                    }}
                >
                    <Text className="text-lg">New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text className="text-lg text-red-400">
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 30, fontWeight: 'bold' }}>
                OR LOGIN WITH
            </Text>
            <SocialButton />
        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 100,
    },
    input: {
        marginBottom: 20,
    },


})


