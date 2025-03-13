import { Image, TouchableOpacity, View } from "react-native";
import * as icons from "@expo/vector-icons"
import { s } from "./style";





export default function HomeScreen() {
    return (
        <View style={s.container}>
            <View style={s.header}>
                <Image source={require('@/assets/logo.png')} style={s.logo} />
                <TouchableOpacity activeOpacity={0.8}>
                    <icons.MaterialIcons name="menu" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}