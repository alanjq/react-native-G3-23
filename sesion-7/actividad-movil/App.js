import { useEffect } from 'react';
import Formulario from './components/Formulario';
import { Alert, BackHandler, Button, SafeAreaView, Text } from 'react-native';
import { requestCameraPermission } from './PermisosCamara';

export default function App() {

  // Detectar que presionamos la tecla regresar
  useEffect(() => {
    const backAction = () => {
      //#region Botones dentro del Alert
      Alert.alert("Estás saliendo de la app",
        "¿Seguro que desea salir de la aplicación?",
        [{ // Botón Cancelar
          text: "Cance",
          onPress: () => null,
          style: "cancel"
        }, { // Botón salir
          text: "Salir",
          style: "default",
          onPress: () => BackHandler.exitApp(),
        }]
      )
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress", backAction
    )

    return () => backHandler.remove()
  }, [])

  return (
    <SafeAreaView>
      <Text>Presiona la tecla de regresar</Text>
      <Button style={{marginTop: 10}} title='Permiso de cámara (Android)' onPress={requestCameraPermission} />
      <Formulario />
    </SafeAreaView>
  );
}

