import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import database from '@react-native-firebase/database';



export default function HandleData(userMeters, userSpeed, userTime) {

    const user='gülce'
    const newReference = database().ref(`users/${user}/activities`)
   
    newReference
        .push({
            meter: userMeters,
            speed: userSpeed,
            time: userTime,
        })
        .then(() => console.log('Data set.'));
}
