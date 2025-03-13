import { ActivityIndicator, Text, View } from "react-native"

import { s } from "./styles"
import { colors } from "@/styles/colors"

export function Loading() {
    return (
        <View style={s.container}>
            <ActivityIndicator size="large" color={colors.gray[100]} />
        </View>
    )
}