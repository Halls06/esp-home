import { StyleSheet } from "react-native";
import { fontFamily, colors } from "@/styles/theme";

export const s = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        margin: 20,
        marginTop: 62,
        marginBottom: 28,
    },
    title: {
        marginHorizontal: 20,
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[900],
    },
    subtitle: {
        fontSize: 16,
        marginTop: 5,
        marginHorizontal: 20,
        color: colors.gray[700],
        fontFamily: fontFamily.regular,
    }
})