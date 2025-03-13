import { View, Text } from "react-native";
import { s } from "./styles";
import { Step } from "@/components/step";


export function Steps(){
    return (
        <View style={s.container}>
            <Text style={s.title}>see how it works</Text>

            <Step icon="home-automation"
               title="Home Automation"
               description="Control your home with your voice or from your phone"
            />
            <Step icon="security"
               title="Security"
               description="Keep an eye on your home from anywhere"
            />
            <Step icon="cash"
               title="Energy"
               description="Save energy and money with smart devices"
            />
        </View>
    )
}