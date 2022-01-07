import React from 'react'
import { View, Text, Button } from 'react-native'
import database from '@react-native-firebase/database'

export default function App() {

  const handleData = () => {
    database()
      .ref()
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }

  return (
    <View>
      <Text></Text>
      <Button title='buton' onPress={handleData} />
    </View>
  )
}
