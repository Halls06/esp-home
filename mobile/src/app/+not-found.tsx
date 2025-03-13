import {View, Text, StyleSheet } from "react-native"
import { Link, Stack } from "expo-router"
import { colors, fontFamily } from "@/styles/theme"

export default function NotFound(){
    return (
        <>
          <Stack.Screen name="+not-found" options={{title: "Oops! Not-found"}} />
          <View style={s.container}>
            <Text style={s.Title}>Not Found</Text>
            <Link href="/"  style={s.Link}>Go to Home</Link>
          </View>
        </>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray[900],
    },
    Title: {
        color: colors.gray[100],
        fontSize: 24,
        fontFamily: fontFamily.bold,
    },
    Link: {
        color: colors.blue[500],
        fontSize: 16,
        fontFamily: fontFamily.regular,
    }
})