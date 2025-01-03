import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ArticleDatails from '../screens/ArticleDetails/ArticleDatails';
import ScreenNames from './ScreenNames';
import {ArticleType} from '../types/ArticleType';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.ArticleDetails}
        component={ArticleDatails}
      />
    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  [ScreenNames.HomeScreen]: undefined;
  [ScreenNames.ArticleDetails]: {
    article: ArticleType;
  };
};
