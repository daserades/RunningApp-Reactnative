import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import styles from './Input.styles';

export default function Input({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput style={styles.input} {...otherProps} />
      </View>
    </View>
  );
}