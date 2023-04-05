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
}) {
    return (
        <View>

            <TextInput
                label={label}
                placeholder={label}
                className="mt-3"
                mode="outlined"
                keyboardType={keyboardType}
                multiline={multiline}
                onChangeText={(value) => onChange(value, label)}
                outlineColor='black'
                activeOutlineColor="blue"
                value={value}
            />
            {/* {!value && (
        <Text style={{ color: "red" }}>Fill this field</Text>
      )} */}

        </View>
    );
}