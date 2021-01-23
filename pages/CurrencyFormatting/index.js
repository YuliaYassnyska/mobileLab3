import React, { useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import LinearProgress from '@material-ui/core/LinearProgress';
import * as theme from "../../components/theme";
import { Block, Text } from "../../components";
import Button from '@material-ui/core/Button';
import { user } from '../../components/mocks';
import CurrencyInput from 'react-native-currency-input';


const CurrencyFormatting = ({ navigation }) => {
    const [value, setValue] = useState(0);


    return <View style={styles.container}>
        <View style={styles.some}>
            <Text style={styles.title}>My currency input</Text>
            <CurrencyInput style={styles.input}
                value={value}
                onChangeValue={setValue}
                unit="$"
                delimiter=","
                separator="."
                precision={2}
                onChangeText={(formattedValue) => {
                    console.log(formattedValue);
                }}
            />
        </View>
    </View>
}


const styles = StyleSheet.create({
    some: {
        backgroundColor: '#ffdf91',
        height: 300,
        padding: 20,
        borderColor: '#91684a',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 25
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaac7f'
    },
    input: {
        height: 70,
        backgroundColor: 'white',
        borderColor: '#91684a',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 25,
        padding: 10
    },
    title: {
        color: '#91684a',
        fontSize: 32,
        marginBottom: 28
    },
})

export default CurrencyFormatting