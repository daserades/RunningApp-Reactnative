import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes'
import MainStack from './MainStack/MainStack'
import SignIn from '../pages/auth/SignIn/SignIn';
import SignUp from '../pages/auth/SignUp/SignUp';
import auth from '@react-native-firebase/auth';
import { UserContext } from '../context/UserProvider';



export default function Navigation() {

    const { state, dispatch } = useContext(UserContext)
    const Stack = createNativeStackNavigator();
    const [hasSession, setHasSession] = useState(null);

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setHasSession);
        return subscribe
    }, []);

    /* useEffect(() => {
        let userId = auth().currentUser.email.replace(/[^a-zA-Z0-9]+/g, "");
        dispatch({ type: 'SET_USERID', payload: { userId: userId } })
        console.log(state.userId)
    }, []) */


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.NEW_ACTIVITY}>
                {!!hasSession ? (
                    <Stack.Screen
                        name={routes.MAIN_STACK}
                        component={MainStack}
                        options={{
                            headerShown: false,

                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name={routes.SIGN_IN_PAGE}
                            component={SignIn}
                            options={{
                                headerTitle: 'SIGN IN',
                                headerTitleAlign: 'center'
                            }}
                        />
                        <Stack.Screen
                            name={routes.SIGN_UP_PAGE}
                            component={SignUp}
                            options={{
                                headerTitle: 'SIGN UP',
                                headerTitleAlign: 'center'
                            }}
                        />
                    </>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
