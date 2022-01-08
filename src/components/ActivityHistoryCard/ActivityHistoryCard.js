import React,{useState} from 'react'
import { View, Text } from 'react-native'
import styles from './ActivityHistoryCard.styles' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ActivityHistoryCard({activ}) {

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='map-marker-distance' size={25} color="#303030"/><Text style={styles.text}>{activ.meter}</Text>
            <MaterialIcons name='speed' size={25} color="#303030" /><Text style={styles.text}>{activ.speed}</Text>
            <MaterialIcons name="timer" size={25} color="#303030" /><Text style={styles.text}>{activ.time} </Text>
        </View>
    )
}
