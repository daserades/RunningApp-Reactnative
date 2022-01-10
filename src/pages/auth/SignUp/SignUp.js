import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import SignUpLayout from './layout';
import routes from '../../../navigation/routes';
import { UserContext } from '../../../context/UserProvider';
import database from '@react-native-firebase/database'

export default function SignUp() {
  const navigation = useNavigation();
  const { dispatch } = useContext(UserContext)

  function uploadUserDetails(email, password, name, surname, id) {

    const newReference = database().ref(`users/${id}/details`)

    newReference
      .set({
        userEmail: email,
        userPassword: password,
        userName: name,
        userSurname: surname,
        userId: id,
      })
      .then(() => console.log('Data set.'));
  }

  const goBack = () => {
    if (navigation.canGoBack) {
      navigation.goBack()
    }
  }

  function handleSignUp(signData) {
    try {
      auth().createUserWithEmailAndPassword(signData.email, signData.password).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('RUN',`Email address ${signData.email} already in use.`)
            break;
          case 'auth/invalid-email':
            Alert.alert('RUN',`Email address ${signData.email} is invalid.`);
            break;
          case 'auth/operation-not-allowed':
            Alert.alert('RUN',`Error during sign up.`);
            break;
          case 'auth/weak-password':
            Alert.alert('RUN','Password is not strong enough. Add additional characters including special characters and numbers.');
            break;
          default:
            console.log(error.message);
            break;
        }
      })

      

      const id = signData.email.replace(/[^a-zA-Z0-9]+/g, "");
      console.log('user ID -- ' + id)

      dispatch({ type: 'SET_EMAIL', payload: { userEmail: signData.email } })
      dispatch({ type: 'SET_PASSWORD', payload: { userPassword: signData.password } })
      dispatch({ type: 'SET_NAME', payload: { userEmail: signData.name } })
      dispatch({ type: 'SET_SURNAME', payload: { userSurname: signData.surname } })
      dispatch({ type: 'SET_USERID', payload: { userId: id } })

      uploadUserDetails(signData.email, signData.password, signData.userName, signData.userSurname, id)

    } catch (error) {
      console.log(error);
      Alert.alert('RUN', 'An error occurred');
    }
  }

  return <SignUpLayout onSignUp={handleSignUp} onGoBack={goBack} />;
}