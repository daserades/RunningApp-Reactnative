import React,{useState} from 'react'
import { View, Text } from 'react-native'
import styles from './LeaderCard.styles' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

export default function LeaderCard({activ}) {

    return (
        <View style={styles.container}>
            <Feather name='user' size={25} color="#303030"/><Text style={styles.text}>{activ.id}</Text>
            <MaterialIcons name='speed' size={25} color="#303030" /><Text style={styles.text}>{activ.speed}</Text>
        </View>
    )
}
