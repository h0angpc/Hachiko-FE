import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function Category() {
    const list = [
        {
            id: 1,
            image: require('@/assets/images/Category/item_1.png'),
            name: "Giao hàng",
            path: '/order'
        },
        {
            id: 2,
            image: require('@/assets/images/Category/item_2.png'),
            name: "Mang đi",
            path: '/profile/add-notification'
        },
        {
            id: 3,
            image: require('@/assets/images/Category/item_3.png'),
            name: "Tại bàn",
            path: '/profile/update-user'
        },
        {
            id: 4,
            image: require('@/assets/images/Category/item_4.png'),
            name: "Cà phê hạt rang",
            path: '/profile/add-voucher'
        },
    ]

    return (
        <View className='mt-4 px-5 '>
            {/* <Text>Category</Text> */}
            <FlatList
                className='rounded-xl border-[1.5px] border-gray-300'
                data={list}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <CategoryItem categoryItem={item} />
                )}
            />
        </View>
    )
}