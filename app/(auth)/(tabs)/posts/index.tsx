import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Posts = () => {
    const router = useRouter()
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Link style={{fontSize: 20}} href="/posts/1">post 1</Link>
        <Link style={{fontSize: 20}} href="/posts/2">post 2</Link>
        <Link style={{fontSize: 20}} href="/posts/3">post 3</Link>
    </SafeAreaView>
    );
}

export default Posts
