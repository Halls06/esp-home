import { StyleSheet } from "react-native";

import { colors,fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        gap: 22,
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        marginHorizontal: 20,
        color: colors.gray[700],
        fontFamily: fontFamily.regular,
    },
})