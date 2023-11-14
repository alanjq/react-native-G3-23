import InputText from "./InputText";
import { useEffect, useState } from 'react'

export default function Formulario() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // Estados
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Eventos
    const handleUsernameChange = ({ target }) => setUsername(target.value)
    const handlePasswordChange = ({ target }) => setPassword(target.value)

    useEffect(() => {
        /*
        if (username === '' || password === '') {
            setIsError(true)
            setIsSuccess(false)
        }
        else {
            if (username !== '' || password !== '') {
                setIsError(false)
                setIsSuccess(true)
            }
        }*/
        // Alternativa
        setIsError(username === '' || password === '')
        setIsSuccess(!(username === '' || password === ''))
    }, [username, password])


    return (
        <form>
            <InputText label="Nombre de usuario" name={"username"} onChange={handleUsernameChange} />
            <InputText label={"Contraseña"} name={"password"} type={"password"} onChange={handlePasswordChange} />
            <button type="button">Iniciar sesión</button>
            {isSuccess ? <div>Bienvenido</div> : null}
            {isError && <div>Credenciales incorrectas</div>}
        </form>
    )
}
