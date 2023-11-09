import { Stack, useRouter } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Two = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}>This is tab two</Text>
    </SafeAreaView>
  );
}

export default Two
