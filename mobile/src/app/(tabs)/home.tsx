import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import * as icons from "@expo/vector-icons"

import { s } from "./style";

import { Button } from "@/components/button";
import { categories } from "@/utils/categories";
import { Categories } from "@/components/categories";





export default function HomeScreen() {
    const [category, setCategory] = useState(categories[0].name)
    return (
        <View style={s.container}>

            <View style={s.header}>

                <Image source={require('@/assets/logo.png')} style={s.logo} />
                <TouchableOpacity activeOpacity={0.8}>
                    <icons.MaterialIcons name="menu" size={32} color="black" />
                </TouchableOpacity>

            </View>

            <Categories onChange={setCategory} selected={category} />
            
            <View style={s.buttonIo}>
                <Button style={s.buttonOn}>
                    <Button.Title>on</Button.Title>
                </Button>
                <Button style={s.buttonOff}>
                    <Button.Title>off</Button.Title>
                </Button>
            </View>

        </View>
    )
}