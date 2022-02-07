import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../routes';
import ActivityHistory from '../../pages/MainApp/ActivityHistory/ActivityHistory';
import Leaderboard from '../../pages/MainApp/Leaderboard/Leaderboard';
import NewActivity from '../../pages/MainApp/NewActivityPage/NewActivity';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();


export default function FavoriteStack() {


    return (
        <Tab.Navigator initialRouteName={routes.NEW_ACTIVITY} >
            <Tab.Screen
                name={routes.ACTIVITY_HISTORY}
                component={ActivityHistory}
                options={{
                    headerTitle: 'Activity Log',
                    headerTitleStyle: {
                        
                        fontSize: 20,
                        fontWeight: '700'
                    },
                    title: 'Activity Log',
                    tabBarActiveTintColor:'green',
                    
                    tabBarLabelStyle: {
                        fontSize: 18,
                        fontWeight: '700'
                    },

                    headerTitleAlign: 'center',
                    tabBarIcon: () => (<MaterialCommunityIcons name='history' size={25} color="#303030" />)
                }}

            />
            <Tab.Screen
                name={routes.NEW_ACTIVITY}
                component={NewActivity}
                options={{
                    headerTitle: 'RUNNIN',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: '700'
                    },
                    headerTitleAlign: 'center',
                    title: 'RUNNIN',
                    tabBarActiveTintColor:'green',
                    tabBarLabelStyle: {
                       
                        fontSize: 18,
                        fontWeight: '700'
                    },
                    
                    tabBarIcon: () => (<MaterialCommunityIcons name='run-fast' size={25} color="#303030" />)
                }}

            />
            <Tab.Screen
                name={routes.LEADERBOARD}
                component={Leaderboard}
                options={{
                    headerTitle: 'Leaderboard',
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700'
                    },
                    headerTitleAlign: 'center',
                    title: 'Leaderboard',
                    tabBarActiveTintColor:'green',
                    tabBarLabelStyle: {
                        fontSize: 18,
                        fontWeight: '700'
                    },
                    tabBarIcon: () => (<MaterialCommunityIcons name='trophy' size={25} color="gold" />)
                }}

            />
        </Tab.Navigator>
    );
}