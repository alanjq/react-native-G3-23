export default function Greeting ({name, otroNombre, alguienMas, alguien, otro}) {
    console.log('PROPS (parametros)', name, otroNombre, alguienMas, alguien, otro);
    return <div>
        Hello<br />
        <p>{name}</p>
        <p>{otroNombre}</p>
        <p>{alguienMas}</p>
    </div>
}
