import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style:any;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, disabled,style}) => (
    <Pressable  style={[style,styles.button]} onPress={onPress} disabled={disabled} >
        <Text style={styles.text}>{title}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        padding:13,
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        borderRadius: 20,
        backgroundColor: '#5DB075'
    },
    text: {
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        color: 'white',
        fontSize: 16,
    }
  });