import { StyleSheet, View, TouchableOpacity, Image, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { Button, CheckBox } from '@rneui/themed';
import SocialButton from '../../components/SocialButton'
import axios from 'axios'
import { API_URL } from '../../api/index';

const LoginScreen = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        remember: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(false);
    // const handleChange = (name) => (event) => {
    //     setCredentials({ ...credentials, [name]: event.target.value });
    // };

    const handleChange = (name) => (value) => {
        setCredentials({ ...credentials, [name]: value });
    };
    return (
        <View>
            <View style={styles.container}>
                <Text variant="headlineSmall" style={{ marginBottom: 50, textAlign: 'center' }}>
                    Login to TANOCAR {credentials.email}
                </Text>
                <TextInput style={styles.input}
                    label="Email"
                    mode='outlined'
                    right={<TextInput.Icon icon="email" />}
                    value={credentials.email}
                    onChangeText={handleChange('email')}
                />
                <TextInput style={styles.input}
                    label="Password"
                    mode='outlined'
                    secureTextEntry={showPassword}
                    right={<TextInput.Icon icon="eye" onPress={(event) => setShowPassword(!showPassword)} />}
                    value={credentials.password}
                    onChangeText={handleChange('password')}
                />
                <CheckBox
                    checked={checked}
                    title="Remember Me"
                    size={30}
                    onIconPress={() => setChecked(!checked)} />

                <Button
                    title="Log in"
                    loading={false}

                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderRadius: 5,
                        width: "100%"

                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                    }}
                    onPress={() => console.log('aye')}
                />


                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                    Don't have an account ? <Text style={{ color: '#A5D7E8', fontSize: 20, fontWeight: 'bold' }}>Register</Text>
                </Text>

            </View>
            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 30, fontWeight: 'bold' }}>
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


