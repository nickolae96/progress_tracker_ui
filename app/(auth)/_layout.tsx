import React from 'react'
import { Stack, useRouter } from 'expo-router'

const Layout = () => {
    const router = useRouter()
    return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{
            headerShown: false
        }} />
        <Stack.Screen name='[missing]' options={{
            title: '404'
        }} />
    </Stack>
    )
}

export default Layout
