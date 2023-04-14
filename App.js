import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImobiliariaProvider } from './contexts/imobiliariaContext';

import HomeScreen from './pages/HomeScreen';
import Register from './pages/Register';
import RegisterUser from './pages/RegisterUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImobiliariaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImobiliariaProvider>
  );
}
