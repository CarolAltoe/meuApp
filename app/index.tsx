import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutScreen } from '../src/screens/AboutScreen';
import { ContactScreen } from '../src/screens/ContactScreen';
import { HomeScreen } from '../src/screens/HomeScreen';
import { ProfileScreen } from '../src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
}
