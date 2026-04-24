import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function Stacks() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Lista de pizzas" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
