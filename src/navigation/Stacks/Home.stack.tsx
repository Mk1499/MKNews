import {createStackNavigator} from '@react-navigation/stack';
import ScreenNames from '../ScreenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SettingScreen from '../../screens/Setting/Setting.screen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.SettingsScreen}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
}
