import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes'
import MainStack from './MainStack/MainStack'
import SignIn from '../pages/auth/SignIn/SignIn';
import SignUp from '../pages/auth/SignUp/SignUp';
import auth from '@react-native-firebase/auth';


export default function Navigation() {

    
    const Stack = createNativeStackNavigator();
    const [hasSession, setHasSession] = useState(null);

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setHasSession);
        return subscribe;
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.NEW_ACTIVITY}>
            {!!hasSession ? (
                    <Stack.Screen
                        name={routes.MAIN_STACK}
                        component={MainStack}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name={routes.SIGN_IN_PAGE}
                            component={SignIn}
                        />
                        <Stack.Screen
                            name={routes.SIGN_UP_PAGE}
                            component={SignUp}
                        />
                    </>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
