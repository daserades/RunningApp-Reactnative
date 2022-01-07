import React from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../../../components/Button'
import auth from '@react-native-firebase/auth';

export default function Leaderboard() {
    return (
        <View>
            <Text>leaderboard</Text>
            <Button label='Sign Out' onPress={() => { auth().signOut().then(() => Alert.alert('RUN', 'Successfully Signed Out')) }} />
        </View>
    )
}
