import {StyleSheet} from 'react-native';

export default {
  default: StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      margin: 5,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    label: {
      fontWeight: 'bold',
      color: 'white',
    },
  }),
  outline: StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: 'blue',
      padding: 10,
      margin: 5,
      alignItems: 'center',
      borderRadius: 10,
    },
    label: {
      fontWeight: 'bold',
      color: 'blue',
    },
  }),
};