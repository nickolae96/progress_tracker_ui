import { Link, Stack, useRouter } from 'expo-router';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
    <Text>Helo There</Text>
    <Link href="/one" asChild>
        <Button title="Tabs"/>
    </Link>
    </SafeAreaView>
  )
}

export default Home
