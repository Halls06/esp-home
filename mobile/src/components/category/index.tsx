import { Text, Pressable, PressableProps} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { s } from "./styles";


type Props = PressableProps & {
    name: string;
    isSelected: boolean;
    icon: keyof typeof MaterialCommunityIcons.glyphMap
}

export function Category({name, icon, isSelected, ...rest}: Props) {
    const color = isSelected ? "green" : "gray"
    return (
        <Pressable style={s.container} {...rest}>
            <MaterialCommunityIcons name={icon} size={24} color={color} />
            <Text style={s.name}>{name}</Text>
        </Pressable>
    )
}