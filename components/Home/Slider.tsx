import { Dimensions, Image, Text, View } from "react-native";
import React, { useState } from 'react'
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "@/constants/Colors";

export default function Slider() {
    const width = Dimensions.get('window').width
    const [pagingEnabled, setPagingEnabled] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0);

    const list = [
        {
            id: 1,
            image: require('@/assets/images/Slider/image_1.png')
        },
        {
            id: 2,
            image: require('@/assets/images/Slider/image_2.png')
        },
        {
            id: 3,
            image: require('@/assets/images/Slider/image_3.png')
        },
        {
            id: 4,
            image: require('@/assets/images/Slider/image_4.png')
        },
        {
            id: 5,
            image: require('@/assets/images/Slider/image_5.png')
        },
        {
            id: 6,
            image: require('@/assets/images/Slider/image_6.png')
        },
        {
            id: 7,
            image: require('@/assets/images/Slider/image_7.png')
        },
    ]
    return (
        <View style={{ height: width / 2 }} className={"relative"}>
            <View style={{ flex: 1 }}>
                <Carousel
                    width={width}
                    height={width / 2}
                    data={list}
                    autoPlay={true}
                    pagingEnabled={pagingEnabled}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    renderItem={({ item }) => (
                        <View className={"flex-1 px-5 justify-center overflow-hidden"}>
                            <Image className={"w-full h-full"} source={item.image} />
                        </View>
                    )}
                />


                <View className={"absolute bottom-2 left-0 right-0 flex-row justify-center"}>
                    {list.map((_, index) => (
                        <View
                            key={index}
                            className={`w-2.5 h-2.5 mx-1 rounded-full ${activeIndex === index ? 'bg-[#E47905]' : 'bg-gray-400'}`}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}