import { Link, Stack, useRouter } from 'expo-router';
import { Text, View, Image, Button, StyleSheet, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [profilePic, setProfilePic] = useState('')

  const {onRegister} = useAuth()

  const register = async () => {
    const response = await onRegister!(username, email, password, profilePic)
    if (response && response.error) {
      alert(response.message)
    } else if (response) {
        router.replace('/login')
    }
  }

  return (
      <SafeAreaView>
        <Text>Register</Text>
        <View>
          <TextInput placeholder='username' onChangeText={(text: string) => setUsername(text)} value={username}/>
          <TextInput placeholder='email' onChangeText={(text: string) => setEmail(text)} value={email}/>
          <TextInput placeholder='password' secureTextEntry={true} onChangeText={(text: string) => setPassword(text)} value={password}/>
          <TextInput placeholder='profilepic' onChangeText={(text: string) => setProfilePic(text)} value={profilePic}/>
          <Button onPress={register} title='Register'/>
        </View>
      </SafeAreaView>
  );
}

export default Register
