import React from 'react'
import { Button } from 'react-native'
import { Tabs, useRouter } from 'expo-router'
import { useAuth } from '../../context/AuthContext'

const Layout = () => {
    const { authState, onLogout } = useAuth()
    const router = useRouter()
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{
                headerTitle: 'Home', 
                tabBarLabel: 'Home'
            }} />
            <Tabs.Screen name='tracker' options={{
                headerTitle: 'Tracker', 
                tabBarLabel: 'Tracker',
            }} />
             <Tabs.Screen name='settings' options={{
                headerTitle: 'Settings', 
                tabBarLabel: 'Settings',
                headerRight: () => (
                    <Button title='Logout' onPress={onLogout}/>
                )
            }} />
        </Tabs>
    )
}

export default Layout
