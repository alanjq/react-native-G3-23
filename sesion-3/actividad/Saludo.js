import { Text, View } from "react-native";

export function SaludoComponent({ nombrePersona }) {
    // Lo que regresa mediante el return se le conoce como render
    return (
        <View>
            <Text>Hola {nombrePersona}</Text>
        </View>
    )
}