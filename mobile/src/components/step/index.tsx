import {View, Text,} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { s } from "./styles";

type Props = {
    title: string;
    description: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
}


export function Step({title, description, icon}: Props) {
    return (
        <View style={s.container}>
        {<MaterialCommunityIcons name={icon} size={52} color="black" />}
            <View style={s.details}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}