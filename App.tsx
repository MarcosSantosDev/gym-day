import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { NativeBaseProvider } from "native-base";

import Loading from "@/components/Loading";
import { THEME } from "@/theme";
import { Routes } from "@/routes";

export default function App() {
  const [fontsIsLoaded] = useFonts({
    'Roboto_700Bold': Roboto_700Bold,
    'Roboto_400Regular': Roboto_400Regular
  });

  return (
    <NativeBaseProvider isSSR={false} theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsIsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
