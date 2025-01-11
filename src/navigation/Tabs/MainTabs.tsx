import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from '../ScreenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import FavArticlesScreen from '../../screens/FavArticles/FavArticles.screen';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const MyTabs = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <MyTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MyTabs.Screen
        name={ScreenNames.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <IonicIcons name="home" size={20} color={color} />
          ),
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <MyTabs.Screen
        name={ScreenNames.FavoritesScreen}
        component={FavArticlesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <IonicIcons name="heart" size={20} color={color} />
          ),
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </MyTabs.Navigator>
  );
}
