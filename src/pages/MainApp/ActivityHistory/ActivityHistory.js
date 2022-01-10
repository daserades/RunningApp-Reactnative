import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import database from '@react-native-firebase/database';
import ActivityHistoryCard from '../../../components/ActivityHistoryCard';
import { UserContext } from '../../../context/UserProvider';
import HandleBestSpeedData from '../../../functions/HandleBestSpeedData'

export default function ActivityHistory() {
  const [userActivities, setUserActivities] = useState([])
  const { state } = useContext(UserContext)
  const [bestSpeed, setBestSpeed] = useState(0)

  useEffect(() => {
    listenActivityChanges()
  }, [])

  function listenActivityChanges() {
    database()
      .ref(`users/${state.userId}/activities`)
      .on('value', snapshot => {
        const activity = snapshot.val();
        if (!!activity) {
          let ActivityArray = Object.keys(activity).map(k => ({
            id: k,
            ...activity[k]
          }))
          let SpeedArray = ActivityArray.map(item => [item.speed])
          HandleBestSpeedData(Math.max.apply(Math, SpeedArray), state.userId)
          setBestSpeed(Math.max.apply(Math, SpeedArray))
          setUserActivities(ActivityArray)
        }
      })
  }



  return (
    <View style={{flex:1}}>

      {!!userActivities.length ?
        (userActivities.map(b => (
          <ActivityHistoryCard activ={b} key={b.id} />
        ))) : <View style={{flex:1, justifyContent: 'center',}}>
          <Text style={{ textAlign: 'center' }}>There is nothing to see.</Text>
          <Text style={{ textAlign: 'center' }}>Better get to work...</Text>
        </View>}
    </View>
  )
}
