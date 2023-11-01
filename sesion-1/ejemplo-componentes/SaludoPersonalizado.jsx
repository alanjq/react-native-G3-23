// Componente con función tipo flecha
export const SaludoPersonalizado = () => {
    return (<div>
        <h2>Hola {nombrePersona}</h2>
    </div>)
}
export const valor2 = '3';

// Function component
export function Salu2Personaliza2() {
    return (<div>
        <h2>Hola {nombre}</h2>
    </div>)
}

export default {
    SaludoPersonalizado,
    valor2,
    Salu2Personaliza2
}

// import {valor2, SaludoPersonalizado} from './SaludoComponent'
import {* as contenido}  from './SaludoComponent'
contenid.valor2
contenido.SaludoPersonalizado()


{/* <div></div> */ }

<SaludoPersonalizado></SaludoPersonalizado>

<Salu2Personaliza2 />


