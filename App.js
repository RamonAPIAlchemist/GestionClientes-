import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ListarClientes from './Screens/ListarClientes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false, title: 'Registro de Clientes' }}
          
        />
        <Stack.Screen 
          name="ListarClientes" 
          component={ListarClientes}
          options={{ title: 'Listado de Clientes' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}