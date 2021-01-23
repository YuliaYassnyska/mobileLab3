import React, { useState } from 'react'
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
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import OpacityIcon from '@material-ui/icons/Opacity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ColorizeIcon from '@material-ui/icons/Colorize';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LinearProgress from '@material-ui/core/LinearProgress';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import { TextInput } from 'react-native-gesture-handler';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItems from '../../components/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';

const SoilSenseF = ({ navigation }) => {

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

    const [temperatureLevel, setTemperatureLevel] = useState(0);
    const [waterPump, setWaterPump] = useState('');
    const [sensorLocation, setSensorLocation] = useState('');
    const [maxWaterValue, setMaxWaterValue] = useState(0);
    const [lightingLevel, setLightingLevel] = useState('');
    const [humidityLevel, setHumidityLevel] = useState(0);
    const [update, setUpdate] = useState('');
    const [value, setValue] = useState('');
    const [newItem, setNewItem] = useState('');

    const handleChange = (event) => {
        setUpdate(event.target.value);
        if (update === 'Max Water') {
            getText()
        }
    };

    const deleteItem = () => {
        docRef.delete().catch(function (error) {
            console.log("Error getting document:", error);
        });
        navigation.navigate('Sensors')
    }

    const getTemperatureLevel = () => {
        docRef.get().then(function (doc) {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                setTemperatureLevel(doc.get('temperatureLevel'));
                setWaterPump(doc.get('waterPump'));
                setSensorLocation(doc.get('sensorLocation'));
                setMaxWaterValue(doc.get('maxWaterValue'));
                setLightingLevel(doc.get('lightingLevel'));
                setHumidityLevel(doc.get('humidityLevel'));
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    const getText = (text) => {
        setValue(text);
    }

    const UpdateFunc = () => {
        if (update === 'Max Water') {
            docRef.update({
                maxWaterValue: value
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });

            setMaxWaterValue(value)
        } else if (update === 'Temperature') {
            docRef.update({
                temperatureLevel: value
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });

            setTemperatureLevel(value)
        } else if (update === 'Sensor Location') {
            docRef.update({
                sensorLocation: value
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });

            setSensorLocation(value)
        } else if (update === 'Lighting') {
            docRef.update({
                lightingLevel: value
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });

            setLightingLevel(value)
        } else if (update === 'Humidity') {
            docRef.update({
                humidityLevel: value
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });

            setHumidityLevel(value)
        } else if (update === 'Water Pump') {
            docRef.update({
                waterPump: value
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });

            setWaterPump(value)
        }
    }

    const addText = (text) => {
        setNewItem(text);
    }

    const add = () => {
        docRef.set({
            name: newItem,
            humidityLevel: humidityLevel,
            temperatureLevel: temperatureLevel,
            lightingLevel: lightingLevel,
            sensorLocation: sensorLocation,
            waterPump: waterPump,
            maxWaterValue: maxWaterValue
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    const renderRequests = () => {
        return (
            <Block flex={0.8} column color="gray2" style={styles.requests}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block card shadow color="white" style={styles.request}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button onClick={() => navigation.navigate('Temperature')}>
                                <ListItemIcon>
                                    <WhatshotIcon />
                                </ListItemIcon>
                                <ListItemText primary="Temperature level" />
                                <ListItemSecondaryAction>
                                    <ListItemText primary={temperatureLevel} />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem button onClick={() => navigation.navigate('MaxWaterValue')}>
                                <ListItemIcon>
                                    <OpacityIcon />
                                </ListItemIcon>
                                <ListItemText primary="Max water value" />
                                <ListItemSecondaryAction>
                                    <ListItemText primary={maxWaterValue} />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem button onClick={() => navigation.navigate('SensorLocation')}>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sensor location" />
                                <ListItemSecondaryAction>
                                    <ListItemText primary={sensorLocation} />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem button onClick={() => navigation.navigate('LightingLevel')}>
                                <ListItemIcon>
                                    <WbIncandescentIcon />
                                </ListItemIcon>
                                <ListItemText primary='Lighting level' />
                                <ListItemSecondaryAction>
                                    <ListItemText primary={lightingLevel} />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem button onClick={() => navigation.navigate('HumidityLevel')}>
                                <ListItemIcon>
                                    <ColorizeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Humidity level" />
                                <ListItemSecondaryAction>
                                    <ListItemText primary={humidityLevel} />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                            <ListItem button onClick={() => navigation.navigate('WaterPump')}>
                                <ListItemIcon>
                                    <YoutubeSearchedForIcon />
                                </ListItemIcon>
                                <ListItemText primary="Water pump" />
                                <ListItemSecondaryAction>
                                    <ListItemText primary={waterPump} />
                                </ListItemSecondaryAction>
                            </ListItem>
                            {newItem !== '' && <ListItems newItem={newItem} />}
                        </List>
                        <Button onClick={deleteItem}><DeleteIcon /></Button>
                    </Block>
                    <Block card shadow color="white" style={styles.request}>
                        <View >
                            <FormControl style={{ marginBottom: 16 }}>
                                <InputLabel id="demo-simple-select-label">Update</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={update}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <MenuItem onClick={() => setUpdate('Temperature')}>Temperature</MenuItem>
                                    <MenuItem onClick={() => setUpdate('Max Water')}>Max Water</MenuItem>
                                    <MenuItem onClick={() => setUpdate('Sensor Location')}>Sensor Location</MenuItem>
                                    <MenuItem onClick={() => setUpdate('Lighting')}>Lighting</MenuItem>
                                    <MenuItem onClick={() => setUpdate('Humidity')}>Humidity</MenuItem>
                                    <MenuItem onClick={() => setUpdate('Water Pump')}>Water Pump</MenuItem>
                                </Select>
                            </FormControl>
                            <View style={{ marginBottom: 16, alignItems: 'center' }}>
                                <TextInput onChangeText={(text) => { getText(text) }} style={{ width: 200, padding: 5, height: 32, borderColor: 'black', borderStyle: 'solid', borderWidth: 3 }} />
                            </View>
                            <View style={styles.buttonWrapper}><Button onClick={UpdateFunc} color='#1A1E3D'>update</Button></View>
                        </View>
                    </Block>
                    <Block card shadow color="white" style={styles.request} row>
                        <TextInput onChangeText={(text) => { addText(text) }} style={{ width: 200, padding: 5, height: 32, borderColor: 'black', borderStyle: 'solid', borderWidth: 3, marginRight: 16 }} />
                        <View style={styles.buttonWrapper}>
                            <View style={styles.buttonWrapper}><Button style={{ width: 150 }} onClick={() => add}>+</Button></View>
                        </View>
                    </Block>
                </ScrollView>
            </Block>
        );
    }

    return (<>{getTemperatureLevel()}
        {waterPump === '' ? <LinearProgress /> : (<SafeAreaView style={styles.safe}>
            <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
                <Block flex={false} row style={{ paddingVertical: 15 }}>
                    <Block center>
                        <Text h3 white style={{ marginRight: -(25 + 5) }}>Data from my sensors</Text>
                    </Block>
                    <Image style={styles.avatar} source={user.avatar} />
                </Block>
                <Block card row shadow color="white" style={styles.headerChart}>
                    <Block row style={{ paddingHorizontal: 30 }}>
                        <Block flex={false} row center>
                            <Text h2 row>Data</Text>
                        </Block>
                    </Block>
                    <Button size="small" color="primary" onClick={() => navigation.navigate('SoilSenseS')}>
                        Next
          </Button>
                </Block>
            </Block>
            {renderRequests()}
        </SafeAreaView>)}</>)
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    request: {
        padding: 20,
        marginBottom: 15
    },
    formControl: {
        minWidth: 120,
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

export default SoilSenseF
