import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import firebase from 'firebase'
import Button from '@material-ui/core/Button';
import 'firebase/firestore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { user } from '../../components/mocks';
import { Block, Text } from "../../components";
import * as theme from "../../components/theme";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';

const Sensors = ({ navigation }) => {

    const onPressed = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigation.navigate('SignIn')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (<SafeAreaView style={styles.safe}>
        <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
            <Block flex={false} row style={{ paddingVertical: 15 }}>
                <Block center>
                    <Text h3 white style={{ marginRight: -(25 + 5) }}>Data from my sensors</Text>
                </Block>
                <Image style={styles.avatar} source={user.avatar} />
            </Block>
            <Block card shadow color="white" style={styles.headerChart}>
                <Block row style={{ paddingHorizontal: 30 }}>
                    <Block flex={false} row center>
                        <Text h2>Welcome!</Text>
                    </Block>
                </Block>
            </Block>
        </Block>
        <Block flex={0.8} column color="gray2" style={styles.requests}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block card shadow color="white" style={styles.request}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button onClick={() => navigation.navigate('SoilSenseF')}>
                            <ListItemIcon>
                                <AddToHomeScreenIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sensor 1" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={() => navigation.navigate('SoilSenseS')}>
                            <ListItemIcon>
                                <AddToHomeScreenIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sensor 2" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={() => navigation.navigate('SoilSenseT')}>
                            <ListItemIcon>
                                <AddToHomeScreenIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sensor 3" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={() => navigation.navigate('CurrencyFormatting')}>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary="Currency formatting" />
                        </ListItem>
                    </List>
                </Block>
                <Block card shadow color="white" style={styles.request}>
                    <View style={styles.buttonWrapper}>
                        <Button onClick={() => { onPressed() }}>Sign out</Button>
                    </View>
                </Block>
            </ScrollView>
        </Block>
    </SafeAreaView>)
}

export default Sensors

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    request: {
        padding: 20,
        marginBottom: 15
    },
    buttonWrapper: {
        display: 'flex',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#1A1E3D',
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1
    },
    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginRight: 5
    },
})