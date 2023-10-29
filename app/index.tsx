import { Stack, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Home"
          
        }}
      />
      <Text>Helo There</Text>
    </SafeAreaView>
  );
}

export default Home
