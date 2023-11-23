import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Boton from './components/Boton';
import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState(0)
  const [memoria, setMemoria] = useState(0)
  const botones = [1, 2, 3, '+',
    4, 5, 6, '-',
    7, 8, 9, 'x',
    'C', 0, '=', '/']

  const handlePress = (valor) => {
    if (!isNaN(valor)) {
      setInput(Number(input + '' + valor))
      console.log('Es número', valor);
    } else if (valor === 'C') {
      setInput(0)
      setMemoria(0)
      console.log('Borrar número', valor);
    } else if (valor === '=') {
      console.log('Mostrar resultado', valor);
    } else if (valor === '+' || valor === '-' || valor === '/' || valor === 'x') {
      console.log('Realizar operación', valor);
      console.log('Memoria', memoria);
      console.log('input', input);
      let resultado = memoria
      switch (valor) {
        case '+':
          resultado = memoria + valor
          break;

        case '-': // revisar
          resultado = memoria + valor
          break;

        case 'x': // Corregir
          resultado = memoria + valor
          break;

        case '/': // corregir
          resultado = memoria + valor
          break;
      }
      setMemoria(resultado)
      setInput(0)

    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <View style={styles.contenedor}>
        <View>
          <TextInput style={styles.textInput} value={input} editable={false} />
        </View>
        <View style={styles.fila}>
          {botones.slice(0, 4).map((boton, i) => <Boton key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(4, 8).map((boton, i) => <Boton key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(8, 12).map((boton, i) => <Boton key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(12, 16).map((boton, i) => <Boton key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  columna: {
    display: 'grid',

  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInput: {
    backgroundColor: '#613434',
    color: '#FFECEC'
  },
  botonNumero: {
    backgroundColor: '#D9D9D9',
    color: '#000',
    fontSize: 20
  },
  botonOperacion: {
    backgroundColor: '#90C0F8',
    color: '#000'
  },
  botonC: {
    backgroundColor: '#F9F4F4',
    color: '#F9F4F4'
  },
  botonResultado: {
    backgroundColor: '#9500CA',
    color: '#FFFBFB'
  }
});
