import { StyleSheet } from "react-native";
import {colors,fontFamily} from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        gap: 24,
        margin: 15,
        width: "100%",
        marginBottom: 20,
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    details: {
        flex: 1,
    },
    title:{
        fontSize: 16,
        color: colors.gray[700],
        fontFamily: fontFamily.semiBold,
    },
    description:{
        fontSize: 14,
        marginTop: 8,
        marginHorizontal: 5,
        color: colors.gray[700],
        fontFamily: fontFamily.regular
    }
})

