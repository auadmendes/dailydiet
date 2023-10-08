import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import { Home } from './src/screens/Home';
import light from './src/theme/light';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })


  return (
    <ThemeProvider theme={light}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
