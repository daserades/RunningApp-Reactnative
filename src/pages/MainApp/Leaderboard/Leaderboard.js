import React, { useContext, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../../../components/Button'
import auth from '@react-native-firebase/auth';
import { UserContext } from '../../../context/UserProvider';
import database from '@react-native-firebase/database'


export default function Leaderboard() {

    const { state, dispatch } = useContext(UserContext)

    


    return (
        <View>
            <Text>leaderboard</Text>
            <Text>{state.userEmail}</Text>
            <Text>{state.userPassword}</Text>

            <Button label='Sign Out' onPress={() => { auth().signOut().then(() => Alert.alert('RUN', 'Successfully Signed Out')) }} />
            <Button label='delete user' onPress={() => { auth().currentUser?.delete().then(() => Alert.alert('RUN', 'Successfully Deleted')) }} />
        </View>
    )
}
