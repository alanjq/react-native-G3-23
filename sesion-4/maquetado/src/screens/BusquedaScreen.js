import { StyleSheet, Text, TextInput, View } from "react-native"
import ListViewDestinos from "../components/ListViewDestinos"
import { useState } from "react"

// URL: /busqueda
export default function BusquedaScreen() {
    const [destino, setDestino] = useState('')

    const estilos = StyleSheet.create({
        border: 3
    })

    return <View>
        <Text>Búsqueda de vuelo</Text>
        {/* Destinos */}
        <ListViewDestinos onSelect={setDestino} />
        {/* Salida */}
        <TextInput placeholder="Destino" defaultValue={destino} />
        <TextInput placeholder="Salida" />
        <TextInput placeholder="Regreso" />
        {/* Regreso */}
        {/* Buscar */}
    </View>
}
