import { Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const PublicLayout = () => {
    const router = useRouter()

  return (
    <Stack>
        <Stack.Screen name='register' options={{
            title: 'Register',
            headerRight: () => (
                <Button title='Login' onPress={()=>router.push('/login')}/>
            )
            }}/>
            <Stack.Screen name='login' options={{
                title: 'Login',
            }} />
    </Stack>
  )
}

export default PublicLayout;
