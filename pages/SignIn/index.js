import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Loading } from 'react-native'
import firebase from 'firebase/app'
import Button from '@material-ui/core/Button';
// import { TextField } from '@material-ui/core';
// import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import NetInfo from "@react-native-community/netinfo";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const SignIn = ({ navigation, newJWT }, props) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        isValidEmail: true,
        isValidPassword: true,
        error: '',
        snackbar: false
        // password_confirmation: '',
        // loading: false
    })

    const { point } = props



    const onButtonPress = () => {
        const { email, password } = data
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => { navigation.navigate("Sensors") })
            .catch(onLoginFail)
    }

    const onLoginFail = () => {
        setData({ error: 'Authentication Failed' })
    }

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (reg.test(text) === true) {
            setData({ ...data, email: text, isValidEmail: true })
        } else {
            setData({ ...data, email: text, isValidEmail: false })
        }
    }

    // const loginUser = () => {
    //   const { email, password, password_confirmation } = data;

    //   setData({ error: '', loading: true });

    //   // NOTE Post to HTTPS only in production
    //   axios.post("http://localhost:4000/api/v1/sign_in",{
    //       email: email,
    //       password: password
    //   })
    //   .then((response) => {
    //     deviceStorage.saveKey("id_token", response.data.jwt);
    //     this.props.newJWT(response.data.jwt);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // }

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setData({ snackbar: false });
    };

    // var point;

    var unsubscribeConnectionListener = () => {
        NetInfo.addEventListener(state => {
            // if (state.isConnected) {
            // point == false;
            // } else {
            // point == true;
            return <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={state.isConnected === false}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            Internet error
              </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            // }
            // setData({ snackbar: !state.isConnected });
        })
        return point;
        // setData({ snackbar: point });
    }
    return (<>
        {unsubscribeConnectionListener()}
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.titleWrapper}>Sign in</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.contain}>
                        <TextInput
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChangeText={(text) => validate(text)} />{data.isValidEmail ? null : (<Text style={styles.errorText}>field is required</Text>)}</View></View>
                <View style={styles.rowContainer}><View style={styles.contain}>
                    <TextInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />{data.isValidPassword ? null : (<Text style={styles.errorText}>field is required</Text>)}
                </View>
                </View>
                <Text style={styles.errorText}>{data.error}</Text>
                <View style={styles.buttonWrapper}>
                    <Button onClick={onButtonPress}>Sign In</Button>
                </View>
                <View style={styles.lastRow}>
                    <Text style={styles.qa}>Not with us yet?</Text>
                    <Text
                        style={styles.link}
                        onPress={() => { navigation.navigate('SignUp') }}>Sign Up</Text>
                </View>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        width: 380,
        height: 400,
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
        // backgroudColor: "#E9B735", 
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

export default SignIn
