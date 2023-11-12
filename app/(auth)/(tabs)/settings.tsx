import { Link, Stack, useRouter } from 'expo-router';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
    <Text>Settings there</Text>
    </SafeAreaView>
  )
}

export default Settings
