import { StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { Button, CheckBox } from '@rneui/themed';
import SocialButton from '../../components/SocialButton'
import axios from 'axios'
import { API_URL } from '../../api/index';


const RegisterScreen = () => {

    const deviceWidth = Dimensions.get('window').width;

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        account_type: "",

    })

    const register_user = (event) => {
        event.preventDefault()
        axios
        .post(API_URL + 'auth/register', {
            email: credentials.email,
            password: credentials.password,
            first_name: credentials.first_name,
            last_name: credentials.last_name,
            phone_number: credentials.phone_number,
            account_type: 'seller',
            corporate: false,
            individual: true,
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(false);
    // const handleChange = (name) => (event) => {
    //     setCredentials({ ...credentials, [name]: event.target.value });
    // };

    const handleChange = (name) => (value) => {
        setCredentials({ ...credentials, [name]: value });
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="headlineSmall" style={{ marginBottom: 50, textAlign: 'center' }}>
                    Sigu Up to TANOCAR {credentials.email}
                </Text>
                <TextInput style={styles.input}
                    label="First Name"
                    mode='outlined'
                    right={<TextInput.Icon icon="account" />}
                    value={credentials.first_name}
                    onChangeText={handleChange('first_name')}
                />
                <TextInput style={styles.input}
                    label="Last Name"
                    mode='outlined'
                    right={<TextInput.Icon icon="account" />}
                    value={credentials.last_name}
                    onChangeText={handleChange('last_name')}
                />
                <TextInput style={styles.input}
                    label="Phone Number"
                    mode='outlined'
                    right={<TextInput.Icon icon="phone" />}
                    value={credentials.phone_number}
                    onChangeText={handleChange('phone_number')}
                />
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
                <TextInput style={styles.input}
                    label="Confirm Password"
                    mode='outlined'
                    secureTextEntry={showPassword}
                    right={<TextInput.Icon icon="eye" onPress={(event) => setShowPassword(!showPassword)} />}
                    value={credentials.password_confirmation}
                    onChangeText={handleChange('password_confirmation')}
                />
                <CheckBox
                    checked={checked}
                    title="Accept Terms and Conditions"
                    size={30}
                    onIconPress={() => setChecked(!checked)} />
            </View>
            <View style={{paddingHorizontal: 10}} >
                <Button
                    title="Sign Up"
                    loading={false}
                    loadingProps={{ size: 'large', color: 'white' }}

                    buttonStyle={{
                        backgroundColor: 'rgba(111, 202, 186, 1)',
                        borderRadius: 5,
                        width: deviceWidth,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{

                        height: 50,
                        width: deviceWidth,
             
                    }}
                    onPress={register_user}
                />


                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                    Already have an account ? <Text style={{ color: '#A5D7E8', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                </Text>

            </View>
            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 30, fontWeight: 'bold' }}>
                OR REGISTER WITH
            </Text>
            <SocialButton />
        </ScrollView>

    )
}

export default RegisterScreen
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 100,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        width: deviceWidth,
    },


})
