import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PhoneAuth() {
    const insets = useSafeAreaInsets();
    const { phoneNumber } = useLocalSearchParams();
    return (
        <View className="flex-1 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View className="flex justify-center items-center h-screen">
                <View className="flex items-center gap-1">
                    <Text className="text-2xl font-bold">Xác nhận mã OTP</Text>
                    <Text className="text-lg">Mã xác thực gồm 6 số đã được gửi đến số điện thoại</Text>
                    <Text className="text-lg">{phoneNumber}</Text>
                </View>
                <View className="flex flex-row gap-2">
                    <View className="flex flex-row gap-2">
                
                    </View>
                </View>
            </View>
        </View>
    );
}