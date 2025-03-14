import { MaterialCommunityIcons } from "@expo/vector-icons"

type Category = {
    id: string 
    name: string
    icon: keyof typeof MaterialCommunityIcons.glyphMap
}

export const categories: Category[] = [
    {id: "1", name: "Home", icon: "home"},
    {id: "2", name: "device", icon: "devices"},
    {id: "3", name: "light", icon: "flash"},
    {id: "4", name: "water", icon: "water"},
];