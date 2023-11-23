import { PermissionsAndroid } from "react-native";

export const requestCameraPermission = async () => {
    try {
        const permitido = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: "Permiso para acceder al calendario",
                message: "Necesitamos acceso al calendario" +
                    "Para poder tomar fotos",
                buttonNeutral: "Pregunta después",
                buttonNegative: "No Permitir",
                buttonPositive: "Permitir"
            }
        );

        console.log(PermissionsAndroid.RESULTS, permitido);
        if (permitido === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Ya se puede usar la cámara");
        } else {
            console.log("No se puede usar la cámara");
        }
    } catch (error) {
        console.error('ERROR al obtener permisos', error);
    }

}
