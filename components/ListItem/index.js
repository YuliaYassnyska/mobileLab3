import React, { useState } from 'react'
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import firebase from 'firebase'
import Button from '@material-ui/core/Button';
import 'firebase/firestore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import OpacityIcon from '@material-ui/icons/Opacity';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const ListItems = (props) => {

    const { newItem } = props

    const add = () => {
        return <>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <OpacityIcon />
                </ListItemIcon>
                <ListItemText primary="Name" />
                <ListItemSecondaryAction>
                    <ListItemText primary={newItem} />
                    {/* <DeleteIcon /> */}
                </ListItemSecondaryAction>
            </ListItem>
        </>
    }
    return <>{add()}</>
}

export default ListItems