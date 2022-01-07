import React ,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import routes from '../../../navigation/routes';

import SignInLayout from './layout';

export default function SignIn() {
  const navigation = useNavigation();

  function handleNavigateSignUp() {
    navigation.navigate(routes.SIGN_UP_PAGE);
  }

  function handleSignIn(signData) {
    try {
      auth().signInWithEmailAndPassword(signData.email, signData.password);
      Alert.alert('RUN', 'Signed In');
    } catch (error) {
      console.log(error);
      Alert.alert('RUN', 'An error occurred');
    }
  }

  return (
    <SignInLayout onSignUp={handleNavigateSignUp} onSignIn={handleSignIn} />
  );
}