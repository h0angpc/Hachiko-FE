import { View, Text, Image } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import BadgeButton from './BadgeButton';
import { Ticket, Bell } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import NotificationButton from './NotificationButton';

export default function Header() {
    const { user } = {
        user: {
            name: 'HOÀNG',
            imageURL: '...'
        }
    };

    return (
        <ThemedView className={"p-5 pt-10"}>
            <ThemedView className={"flex flex-row items-center"}>
                <Image source={require('@/assets/images/peach_tea.png')} />
                <ThemedText className={"font-bold text-xs"}>{user.name} ơi, Hi-Tea đi!</ThemedText>
                <View className={"ml-auto flex flex-row"}>
                    <BadgeButton className='mr-2' icon={<Ticket size={24} color={Colors.PRIMARY} />} text={11} />
                    <NotificationButton icon={<Bell size={24} color="black" />} count={1} />
                </View>
            </ThemedView>
        </ThemedView>
    )
}