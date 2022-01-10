import React, { useContext } from 'react';
import database from '@react-native-firebase/database';



export default function HandleData(PBspeed,id) {


    const newReference = database().ref(`users/BestSpeeds`)
    
    newReference
        .update({
            [id]: PBspeed,
        })
        .then(() => console.log('Data set.'));
}
