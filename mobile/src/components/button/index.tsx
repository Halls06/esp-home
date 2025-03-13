import {Text, TextProps, TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { s } from './style';
import { colors } from '@/styles/colors';


type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;
}


function Button({children, style, isLoading = false,...rest}: ButtonProps) {
    return (
        <TouchableOpacity
         style={[s.container, style]}
         activeOpacity={0.7}
         disabled={isLoading}
         {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={colors.gray[200]} />
            ) : (
                children
            )}
        </TouchableOpacity>
    );
}

function Title({ children }: TextProps) {
    return <Text style={s.Title}>{children}</Text>
}

type IconProps = {
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

function Icon({icon}: IconProps){
    return <MaterialCommunityIcons name={icon} size={24} color={colors.gray[200]} />
}
    
Button.Title = Title;
Button.Icon = Icon;
    
export { Button };
