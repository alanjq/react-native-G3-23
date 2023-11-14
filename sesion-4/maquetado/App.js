import { SafeAreaView, ScrollView } from 'react-native';
import MenuScreen from './src/screens/MenuScreen';
import ResultadosScreen from './src/screens/ResultadosScreen';
import BusquedaScreen from './src/screens/BusquedaScreen';


export default function App() {

  return (
    <SafeAreaView>
      <ScrollView>
        <MenuScreen />
        <BusquedaScreen />
        <ResultadosScreen />
      </ScrollView>
    </SafeAreaView>
  )

  /*
  return (
    <SafeAreaView>

      <NativeRouter>
        <Routes>

          {/* <Logo />
          <Route path='/'>
            <Route index element={<MenuScreen />}/>
            <Route path="/busqueda" element={<BusquedaScreen />} />
            <Route path="/resultados" element={<ResultadosScreen />} />
          </Route>
        </Routes>
      </NativeRouter>


    </SafeAreaView>
  );
  */
}
