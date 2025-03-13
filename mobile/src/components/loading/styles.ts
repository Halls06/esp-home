import { fontFamily, colors } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray[900],
    },
    title: {
        margin: 10,
        fontSize: 24,
        color: colors.gray[300],
        fontFamily: fontFamily.bold,
    }
})