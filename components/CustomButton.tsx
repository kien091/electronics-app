import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
    label: string;
    onPress: () => void;
};

export default function CustomButton({ label, onPress }: CustomButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>
            {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fd6600',
        padding: 20,
        borderRadius: 10,
        marginBottom: 24,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: 'white',
    },
});