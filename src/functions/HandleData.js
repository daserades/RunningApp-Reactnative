import React, { useContext } from 'react';
import database from '@react-native-firebase/database';



export default function HandleData(userMeters, userSpeed, userTime, id) {


    const newReference = database().ref(`users/${id}/activities`)

    newReference
        .push({
            meter: userMeters,
            speed: userSpeed,
            time: userTime,
        })
        .then(() => console.log('Data set.'));
}
