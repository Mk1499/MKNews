import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen/login.screen';
import ScreenNames from '../ScreenNames';
import ArticleDatails from '../../screens/ArticleDetails/ArticleDatails';

const Stack = createStackNavigator();

export default function SharedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenNames.ArticleDetails}
        component={ArticleDatails}
      />
    </Stack.Navigator>
  );
}
