import React, { useContext, useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../../../components/Button'
import auth from '@react-native-firebase/auth';
import { UserContext } from '../../../context/UserProvider';
import database from '@react-native-firebase/database'
import LeaderCard from '../../../components/LeaderCard';
import styles from './Leaderboard.styles'


export default function Leaderboard() {
    const [bestSpeedsArray, setBestSpeedsArray] = useState([])
    const { state, dispatch } = useContext(UserContext)

    useEffect(() => {
        listenBestSpeedChanges()
    }, [])


    function listenBestSpeedChanges() {
        database()
            .ref(`users/BestSpeeds`)
            .on('value', snapshot => {
                const bestSpeeds = snapshot.val();
                if (!!bestSpeeds) {
                    let BestSpeedArray = Object.keys(bestSpeeds).map(k => ({
                        id: k,
                        speed: bestSpeeds[k],
                        ...bestSpeeds[k]
                    }))

                    var bySpeed = BestSpeedArray.slice(0);
                    bySpeed.sort(function (a, b) {
                        return a.born - b.born;
                    });

                    setBestSpeedsArray(bySpeed)
                }
            })
    }




    return (
        <View>

            {bestSpeedsArray.map(b => (
                <LeaderCard activ={b} key={b.id} />
            ))}

            <View style={styles.buttonSignOut}>
                <Button label='Sign Out' onPress={() => { auth().signOut().then(() => Alert.alert('RUN', 'Successfully Signed Out')) }} />
            </View>
        </View>
    )
}
