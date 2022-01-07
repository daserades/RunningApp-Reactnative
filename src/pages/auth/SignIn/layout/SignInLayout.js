import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import styles from './SignInLayout.styles';

export default function SignIn({onSignIn, onSignUp}) {
  const [signData, setSignData] = useState({email: '', password: ''});

  return (
    <SafeAreaView>
      
      <Input
        label="Email"
        autoCapitalize="none"
        onChangeText={email => setSignData({...signData, email})}
      />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={password => setSignData({...signData, password})}
      />
      <Button label="Sign In" onPress={() => onSignIn(signData)} />
      <Button label="Sign Up" theme="outline" onPress={onSignUp} />
    </SafeAreaView>
  );
}