import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import firebase from 'firebase/app'
import Button from '@material-ui/core/Button';
// import { TextField } from '@material-ui/core';
// import axios from 'axios';
// import deviceStorage from '../../scr/services/deviceStorage';



const SignUp = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        phone: 0,
        password: '',
        isValidEmail: true,
        isValidPassword: true,
        isValidPhone: true,
        // password_confirmation: '',
        // loading: false
    })


    // const registerUser = () => {
    //   const { email, password, password_confirmation } = data

    //   setData({ error: '', loading: true });

    //   axios.post("http://localhost:4000/api/v1/sign_up",{
    //     user: {
    //       email: email,
    //       password: password,
    //       password_confirmation: password_confirmation
    //     }
    //   },)
    //   .then((response) => {
    //     deviceStorage.saveKey("id_token", response.data.jwt);
    //     newJWT(response.data.jwt);
    //   })
    //   .catch((error) => {
    //      // Handle returned errors here
    //   });
    // }

    const onPressed = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => { navigation.navigate("Sensors") })
            .catch((error) => {
                console.log(error);
            })
    }

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (reg.test(text) === true) {
            setData({ ...data, email: text, isValidEmail: true })
        } else {
            setData({ ...data, email: text, isValidEmail: false })
        }
    }

    const checkNum = (num) => {
        if (num.length === 10) {
            setData({ ...data, phone: num, isValidPhone: true })
        } else {
            setData({ ...data, phone: num, isValidPhone: false })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
            })
        }
    }

    return (<View style={styles.wrapper}>
        <View style={styles.container}>
            <Text style={styles.titleWrapper}>Sign up</Text>
            <View style={styles.rowContainer}>
                <View style={styles.contain}>
                    <TextInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChangeText={(text) => validate(text)}
                    />
                    {data.isValidEmail ? null : (
                        <Text style={styles.errorText}>field is required</Text>
                    )}
                </View>
            </View>
            <View style={styles.rowContainer}>
                <TextInput
                    type="text"
                    id="name"
                    placeholder="Name"
                />
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.contain}>
                    <TextInput
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        onChangeText={(num) => {
                            checkNum(num)
                        }}
                    />{data.isValidPhone ? null : (
                        <Text style={styles.errorText}>field is required</Text>
                    )}
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.contain}>
                    <TextInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    {data.isValidPassword ? null : (
                        <Text style={styles.errorText}>field is required</Text>)}
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <Button
                    onClick={onPressed}
                >Sign Up</Button>
            </View>
            <View style={styles.lastRow}>
                <Text style={styles.qa}>Not with us yet?</Text>
                <Text
                    style={styles.link}
                    onPress={() => {
                        navigation.navigate("SignIn")
                    }}
                >Sign In</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        width: 380,
        height: 550,
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleWrapper: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 32,
        justifyContent: 'center',
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        padding: 16,
    },
    buttonWrapper: {
        display: 'flex',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#1A1E3D',
        marginTop: 16,
    },
    lastRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginLeft: 16,
        marginRight: 48,
    },
    qa: {
        fontSize: 14.4,
        color: '#1A1E3D',
    },
    link: {
        fontWeight: 'bold',
        color: '#6BB5C9',
    },
    errorText: {
        fontSize: 11.2,
        color: '#C7424F',
        fontWeight: 'bold',
        width: 128,
    },
    contain: {
        display: 'flex',
        flexDirection: 'column',
    },
})

export default SignUp
