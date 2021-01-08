import * as React from 'react'
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
    text: string,
    size: number,
    color: string,
    backgroundColor: string,
    single?: boolean
    style?: ViewStyle
}

const MaterialInitials: React.FC<Props> =
    ({
         text,
         size,
         color,
         backgroundColor,
         single,
         style
     }) => {

        const getFontSize = () => {
            return single ? (size) / 1.7 : (size - 5) / 2
        }

        const getInitials = () => {
            if ( text === '') {
                return text;
            } else {
                let symbols = text.trim();
                let indexOfSpace = symbols.indexOf(' ');
                if ((indexOfSpace > 0) && (indexOfSpace < symbols.length) && !single) {
                    return (symbols[0] + symbols[indexOfSpace + 1]).toUpperCase();
                } else {
                    return symbols[0].toUpperCase();
                }
            }
        }

        return (
            <View style={{backgroundColor: 'transparent'}}>
                <View style={[styles.icon, {
                    backgroundColor: backgroundColor,
                    height: size,
                    width: size,
                    borderRadius: size / 2
                },
                    style]}
                >
                    <Text allowFontScaling={false} style={[styles.text, {
                        fontSize: getFontSize(),
                        color: color,
                        backgroundColor: 'transparent'
                    }]}>{getInitials()}</Text>
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        color: '#fff'
    }
});

export default MaterialInitials
