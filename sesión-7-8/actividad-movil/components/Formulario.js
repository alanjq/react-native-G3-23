import { Button, StyleSheet, Text, View } from "react-native";
import InputText from "./InputText";
import { useEffect, useState } from "react";

export default function Formulario() {
    // Estados
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Estados para mostrar los mensajes de error o sucess
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsError(username === '' || password === '')
        setIsSuccess(!(username === '' || password === ''))
    }, [username, password])

    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleSubmit = () => {
        if (username === '' || password === '') {
            // Login incorrecto
            setIsError(true)
            setIsSuccess(false)
        } else {
            // Login válido
            setIsError(false)
            setIsSuccess(true)
        }
    }

    return (
        <View style={FormularioStyle.contenedor}>
            {/* Input: Nombre usuario */}
            <InputText label="Nombre de usuario" onChange={setUsername} />
            <InputText label="Contraseña" password={true} onChange={handlePasswordChange} />

            <Button title="Iniciar sesión" onPress={handleSubmit} style={FormularioStyle.btnSubmit} />

            {isSuccess && <Text style={{ ...FormularioStyle.mensaje, ...FormularioStyle.mensajeAcceso }}>Bienvenido</Text>}
            {isError && <Text style={{ ...FormularioStyle.mensaje, ...FormularioStyle.mensajeError }}>Credenciales incorrectas</Text>}
        </View>
    )
}

const FormularioStyle = StyleSheet.create({
    contenedor: {
        width: "100%",
        marginTop: 40,
        gap: 15,
    },
    btnSubmit: {
        display: "flex",
    },
    mensaje: {
        textAlign: "center",
        padding: 8,
        fontWeight: "bold"
    },
    mensajeError: {
        backgroundColor: 'red',
        color: 'yellow'
    },
    mensajeAcceso: {
        backgroundColor: 'blue',
        color: 'white'
    }
})
