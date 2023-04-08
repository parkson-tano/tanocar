import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, Card } from 'react-native-paper';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
export default function InputField({
    label,
    icon,
    keyboardType,
    onChange,
    value,
    multiline,
    error,
    disabled
}) {
    return (
        <View>

            <TextInput
                label={label.toUpperCase()}
                placeholder={label.toUpperCase()}
                mode="outlined"
                keyboardType={keyboardType}
                multiline={multiline}
                onChangeText={(value) => onChange(value, label)}
                outlineColor='black'
                value={value}
                className="my-2"
                error={error}
                disabled={disabled}
            />
            {/* {!value && (
        <Text style={{ color: "red" }}>Fill this field</Text>
      )} */}

        </View>
    );
}