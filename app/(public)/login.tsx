import { Stack, useRouter } from 'expo-router';
import { Text, View, Image, Button, StyleSheet, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {onLogin} = useAuth()

  const login = async () => {
    const response = await onLogin!(username, password)
    if (response && response.error) {
      alert(response.message)
    } 
  }

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <View>
        <TextInput placeholder='username' onChangeText={(text: string) => setUsername(text)} value={username}/>
        <TextInput placeholder='password' secureTextEntry={true} onChangeText={(text: string) => setPassword(text)} value={password}/>
        <Button onPress={login} title='Login'/>
      </View>
    </SafeAreaView>
  );
}

export default Login
