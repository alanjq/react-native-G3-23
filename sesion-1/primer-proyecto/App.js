import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Estilos para el componente Text
  const ESTILOS_CSS = {
    backgroundColor: 'purple',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25
  }

  return (
    <View style={styles.container}>
      <Text style={ESTILOS_CSS}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
