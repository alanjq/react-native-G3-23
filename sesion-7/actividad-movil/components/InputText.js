import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputText({ password, label, onChange }) {

    return <View style={InputTextStyle.contenedor}>
        <Text style={InputTextStyle.textLabel}>{label}</Text>
        <TextInput secureTextEntry={password} onChangeText={onChange} style={InputTextStyle.textInput} />
    </View>
}

const InputTextStyle = StyleSheet.create({
    textLabel: {
        fontSize: 20,
        color: 'purple',
        textAlign: "center"
    },
    textInput: {
        backgroundColor: '#DDD',
        padding: 10,
    },
    contenedor: {
        padding: 5
    }
})
