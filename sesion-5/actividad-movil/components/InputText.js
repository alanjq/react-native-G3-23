import { Text, TextInput } from "react-native";

export default function InputText({ password, label, onChange }) {

    return <View>
        <Text>{label}</Text>
        <TextInput secureTextEntry={password} onChangeText={onChange} />
    </View>
}
