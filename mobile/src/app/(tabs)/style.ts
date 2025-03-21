import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    title: {
        color: colors.gray[700],
        fontSize: 22,
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 52,
        width: 48,
    },
    buttonIo: {
        marginTop: 60,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
    },
    buttonOn: {
        width: "48%",
        height: 48,
    },
    buttonOff: {
        width: "48%",
        height: 48,
    }
})