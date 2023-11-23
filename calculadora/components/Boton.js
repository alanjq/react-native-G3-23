import { Button, StyleSheet } from "react-native";

export default function Boton({ title, onPress }) {
    return <Button title={title} onPress={(v) => onPress(title)} />
}
