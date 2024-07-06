import { StatusBar, Text, View } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontRobotoIsLoaded] = useFonts({
    'robotoRegular': Roboto_400Regular,
    'robotoBold': Roboto_700Bold
  });

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#202024',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontRobotoIsLoaded && <Text style={{ color: '#FFFFFF', fontFamily: 'robotoRegular' }}>Hello world!</Text>}
      {!fontRobotoIsLoaded && <Text>Font loading!</Text>}
    </View>
  );
}
