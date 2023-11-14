import Boton from "./components/Boton";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";

function App() {
  const eventoClick = () => {
    console.log("Se hizo clic");
  }

  const handleTextInputChange = (e) => {
    console.log("SALIDA:", e.target.value);
  }

  return (
    <div>
      {/* <Greeting name="Luis" otroNombre="Dario" alguienMas="Anabel" /> */}
      <h2>Props</h2>
      <Greeting alguien="dario" otroNombre="Claudia" alguienMas={"Antonio"} />

      <h2>Eventos</h2>
      <TextInput id="nombre" label="Ingresa tu nombre" />
      <TextInput id="correo" label="Ingresa tu correo" />
      <TextInput id="edad" label="Ingresa tu edad" />
      <div>
        <Boton onClick={eventoClick} />
      </div>
    </div>
  );
}

export default App;
