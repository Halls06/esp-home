import { MaterialCommunityIcons } from "@expo/vector-icons"
type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap
}

export const categories: Category[] = [
    {id: "1", name: "Home", icon: "home"},
    {id: "2", name: "Motoring-Water", icon: "water"},
    {id: "3", name: "Burgers", icon: "hamburger"},
]