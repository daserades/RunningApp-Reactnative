import React ,{useState}from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import SignUpLayout from './layout';

export default function SignIn() {
  const navigation = useNavigation();

  function handleSignUp(signData) {
    try {
      auth().createUserWithEmailAndPassword(signData.email, signData.password);
      Alert.alert(
        'RUN',
        'User created. Now you can sign in with your address',
      );
      handleReturnSignIn();
    } catch (error) {
      console.log(error);
      Alert.alert('RUN', 'An error occurred');
    }
  }

  function handleReturnSignIn() {
    if (!navigation.canGoBack()) {
      return;
    }
    navigation.goBack();
  }

  return <SignUpLayout onGoBack={handleReturnSignIn} onSignUp={handleSignUp} />;
}