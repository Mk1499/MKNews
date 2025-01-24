import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen/login.screen';
import ScreenNames from '../ScreenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ArticleDatails from '../../screens/ArticleDetails/ArticleDatails';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}
