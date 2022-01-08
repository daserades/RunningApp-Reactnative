import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../routes';
import ActivityHistory from '../../pages/MainApp/ActivityHistory/ActivityHistory';
import Leaderboard from '../../pages/MainApp/Leaderboard/Leaderboard';
import NewActivity from '../../pages/MainApp/NewActivityPage/NewActivity';
const Tab = createBottomTabNavigator();


export default function FavoriteStack() {
    

    return (
        <Tab.Navigator initialRouteName={routes.NEW_ACTIVITY}>
            <Tab.Screen
                name={routes.ACTIVITY_HISTORY}
                component={ActivityHistory}
                options={{
                    headerTitle:'Activity History',
                    headerTitleAlign:'center'
                }}

            />
            <Tab.Screen
                name={routes.NEW_ACTIVITY}
                component={NewActivity}
                options={{
                    headerTitle:'Activity',
                    headerTitleAlign:'center'
                }}

            />
            <Tab.Screen
                name={routes.LEADERBOARD}
                component={Leaderboard}
                options={{
                    headerTitle:'Leaderboard',
                    headerTitleAlign:'center'
                }}

            />
        </Tab.Navigator>
    );
}