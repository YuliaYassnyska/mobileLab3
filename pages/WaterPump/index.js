import React, { useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import firebase from 'firebase'
import 'firebase/firestore';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as theme from "../../components/theme";
import { Block, Text } from "../../components";
import Button from '@material-ui/core/Button';
import { user } from '../../components/mocks';

const WaterPump = ({ navigation }) => {
    var config = {
        apiKey: 'AIzaSyBmMQzZDPK8WoRFsXZwEikglgPh8fdbRfU',
        authDomain: 'moonlit-premise-268014.firebaseapp.com',
        databaseURL: 'https://project-483449585526.firebaseio.com',
        projectId: 'moonlit-premise-268014',
    }

    if (!firebase.apps.length) {
        var app = firebase.initializeApp(config)
    }

    var db = firebase.firestore(app);

    var docRef = db.collection("soilSense").doc("ELerybp3IBsyEfloN4vF");

    const [waterPump, setWaterPump] = useState('');

    const getWaterPump = () => {
        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setWaterPump(doc.get('waterPump'));
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
    return <View>
        {getWaterPump()}
        {waterPump === '' ? <LinearProgress /> : (
            <SafeAreaView style={styles.safe}>
                <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
                    <Block flex={false} row style={{ paddingVertical: 15 }}>
                        <Block center>
                            <Text h3 white style={{ marginRight: -(25 + 5) }}>Water Pump</Text>
                        </Block>
                        <Image style={styles.avatar} source={user.avatar} />
                    </Block>
                    <Block row card shadow color="white" style={styles.headerChart}>
                        <Block style={{ paddingHorizontal: 30 }}>
                            <Block flex={false} row center>
                                <Text h2>{waterPump}</Text>
                            </Block>
                        </Block>
                        <Button size="small" color="primary" onClick={() => navigation.navigate('SoilSenseF')}>
                            Go to main page
        </Button>
                        <Button size="small" color="primary" onClick={() => navigation.navigate('CurrencyFormatting')}>
                            Next
        </Button>
                    </Block>
                </Block>
                <Block flex={0.8} column color="gray2" style={styles.requests} />
            </SafeAreaView>)}
    </View>
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginRight: 5
    },
    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1,
    },
    progress: {
        alignItems: 'center',
        width: 50,
        justifyContent: 'center',
    }
})

export default WaterPump