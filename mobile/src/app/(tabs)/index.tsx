import {View} from "react-native"
import {router} from "expo-router"


import { s } from "./style"

import { Welcome } from "@/components/welcome"
import { Steps } from "@/components/steps"
import { Button } from "@/components/button"



export default function Index(){
    return (
        <View style={s.container}>
                <Welcome />
                <Steps />
                <Button onPress={() => router.navigate("/(tabs)/home")}>
                    <Button.Title> Start</Button.Title>
                </Button>
        </View>
    )
}