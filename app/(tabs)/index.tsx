import { SafeAreaView, View } from 'react-native';

import Header from '@/components/Home/Header';
import Slider from '@/components/Home/Slider';
import { ThemedView } from '@/components/ThemedView';
import Category from '@/components/Home/Category';

export default function HomeScreen() {
    return (
        <ThemedView className='flex'>
            <Header />
            <Slider />
            <Category />
        </ThemedView>
    );
}