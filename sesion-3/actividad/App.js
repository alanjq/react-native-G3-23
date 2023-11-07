import { SafeAreaView } from 'react-native';
import { SaludoComponent } from './Saludo';

export default function App() {
  const ALUMNOS = [
    'Antonio',
    'Claudia',
    'Darío',
    'Anabel',
    'Luis'
  ]

  const cadaAlumno = (alumno, index) => {
    return <SaludoComponent nombrePersona={alumno} key={index} />
  }

  return (
    <SafeAreaView>
      {ALUMNOS.map(cadaAlumno)}
    </SafeAreaView>
  );
}
