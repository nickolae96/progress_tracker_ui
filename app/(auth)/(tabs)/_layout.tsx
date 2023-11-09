import React from 'react'
import { Tabs, useRouter } from 'expo-router'

const Layout = () => {
    const router = useRouter()
    return (
        <Tabs>
            <Tabs.Screen name='one' options={{
                headerTitle: 'One', 
                tabBarLabel: 'One'
            }} />
            <Tabs.Screen name='two' options={{
                headerTitle: 'Two', 
                tabBarLabel: 'Two'
            }} />
             <Tabs.Screen name='posts' options={{
                headerTitle: 'Posts', 
                tabBarLabel: 'Posts',
                headerShown: false
            }} />
        </Tabs>
    )
}

export default Layout
