import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import database from '@react-native-firebase/database';



export default function ActivityHistory() {

  const [textComp, setTextComp] = useState("merhaba")

  const handleData = () => {
    console.log('asda')
    database()
      .ref()
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }


  return (
    <View>
      <Text>activity history</Text>
      <Text>{textComp}</Text>
      <Button title='db check' onPress={handleData} />
    </View>
  )
}
