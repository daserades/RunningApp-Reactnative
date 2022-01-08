import React from 'react'
import { View, Text } from 'react-native'
import Navigation from './navigation/Navigation'
import UserProvider from './context/UserProvider'

export default function App() {
    return (
        <UserProvider>
            <Navigation />
        </UserProvider>

    )
}
