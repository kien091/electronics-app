import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type InputFieldProps = {
    label: string;
    icon: any;
    inputType: string;
    keyboardType: any;
    fieldButtonLabel: string;
    fieldButtonFunction: () => void;
};

export default function InputField({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
}: InputFieldProps) {
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
        }}>
            {icon}
            {inputType == 'password'
                ? (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0, }}
                        secureTextEntry={true}
                    />
                )
                : (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0, }}
                    />
                )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: '#fd6600', fontWeight: '700' }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    );
}