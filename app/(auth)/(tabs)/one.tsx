import { Stack, useRouter } from 'expo-router';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const One = () => {
    const router = useRouter()
    return (
    <SafeAreaView>
        <Text style={{ fontSize: 20 }}>This is tab one</Text>
        <Button title='Back' onPress={() => router.back()}/>
    </SafeAreaView>
    );
}

export default One
