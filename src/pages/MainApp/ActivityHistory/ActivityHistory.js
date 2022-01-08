import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import database from '@react-native-firebase/database';
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from 'react-native-gesture-handler';
import ActivityHistoryCard from '../../../components/ActivityHistoryCard';


export default function ActivityHistory() {
  const IsFocused = useIsFocused();
  const [userActivities, setUserActivities] = useState([])


  useEffect(() => {
    listenActivityChanges()
  }, [])


  function listenActivityChanges() {
    const user = 'gülce'
    database()
      .ref(`users/${user}/activities`)
      .on('value', snapshot => {
        const activity = snapshot.val();
        if (!!activity) {
          setUserActivities(Object.keys(activity).map(k => ({
            id: k,
            ...activity[k]
          })
          ))

        }
      })

  }

  const renderItem = ({ item }) => (
    <View>
      <ActivityHistoryCard activ={item} />
    </View>
  );

  return (
    <View>
      {!!userActivities.length ?
        (userActivities.map(b => (
          <ActivityHistoryCard activ={b} key={b.id} />
        ))) : <Text style={{textAlign:'center'}}>There is nothing to see</Text>}
    </View>
  )
}
