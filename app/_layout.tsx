import React, {useEffect} from 'react'
import { Slot, useRouter, useSegments  } from 'expo-router'
import { AuthProvider, useAuth } from './context/AuthContext'

const InitialLayout = () => {
    const router = useRouter()
    const segments = useSegments();
    const { authState } = useAuth()
    useEffect(() => {
        const inTabsGroup = segments[0] === '(auth)';

        if (authState?.authenticated && !inTabsGroup) {
            router.replace('/home')
        } else if (!authState?.authenticated) {
            router.replace('/register')
        }
    }, [authState?.authenticated])
    return <Slot />
}


const RootLayout = () => {
    return (
    <AuthProvider>
        <InitialLayout />
    </AuthProvider>
    )
}

export default RootLayout;