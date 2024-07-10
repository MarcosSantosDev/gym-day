import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import SignIn from '@/screens/SignIn'
import SignUp from '@/screens/SignUp'

type Routes = {
  SignIn: undefined;
  SignUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<Routes>;

const { Navigator, Screen } = createNativeStackNavigator<Routes>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='SignIn'
        component={SignIn}
      />
      <Screen
        name='SignUp'
        component={SignUp}
      />
    </Navigator>
  )
}