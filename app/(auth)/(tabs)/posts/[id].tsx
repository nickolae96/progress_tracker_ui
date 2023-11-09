import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PostDetail = () => {
    const router = useRouter()
    const {id} = useLocalSearchParams()
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Stack.Screen options={{
            headerTitle: `Post ${id}`,
            headerTitleAlign: 'center'
        }}/>
        <Text style={{fontSize: 30}}>This is post detail for Post {id}</Text>
    </SafeAreaView>
    );
}

export default PostDetail