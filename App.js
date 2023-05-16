import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImobiliariaProvider } from './contexts/imobiliariaContext';
import { UserProvider } from './contexts/userContext';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import Register from './pages/Register';
import RegisterPerson from './pages/RegisterPerson';
import RegisterUser from './pages/RegisterUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImobiliariaProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{
                headerTitle: 'Imobiliaria',
                headerTitleStyle: { color: '#2196F3' },
              }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="RegisterUser"
              options={{
                headerTitle: 'Imobiliaria',
                headerTitleStyle: { color: '#2196F3' },
              }}
              component={RegisterUser}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterPerson" component={RegisterPerson} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </ImobiliariaProvider>
  );
}
