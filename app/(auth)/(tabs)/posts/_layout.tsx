import React from 'react'
import { Stack, useRouter } from 'expo-router'

const _layout = () => {
    const router = useRouter()
    return (
    <Stack>
        <Stack.Screen name='index' options={{
            title: 'Posts'
        }} />
        <Stack.Screen name='[id]' options={{
            title: 'Posts details'
        }} />
    </Stack>
    )
}

export default _layout
