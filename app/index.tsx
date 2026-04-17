import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '../src/screens/AboutScreen';
import { HomeScreen } from '../src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
