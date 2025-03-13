import { Text, View,Image } from "react-native";

import { s } from "./styles";

export function Welcome(){
    return (
        <View>
            <Image style={s.logo} source={require("@/assets/logo.png")} />
            <Text style={s.title}>Welcome to Esp-Home</Text>
            <Text style={s.subtitle}>The best way to control your home</Text>
        </View>
    )
}