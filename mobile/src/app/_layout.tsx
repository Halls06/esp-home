import {useFonts, Rubik_400Regular,Rubik_500Medium,Rubik_600SemiBold,Rubik_700Bold} from "@expo-google-fonts/rubik"
import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

import { Loading } from "@/components/loading"

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    })

    if(!fontsLoaded){
        return <Loading />
    }

    return (
        <>
          <Stack screenOptions={{headerShown: false, contentStyle: {backgroundColor: colors.gray[100]}}}>
            <Stack.Screen name="(tabs)"  options={{headerShown: false}}/>
            <Stack.Screen name="+not-found" />
          </Stack>
        </>
    )
}