import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArticleType} from '../types/ArticleType';
import AuthStack from './Stacks/Auth.stack';
import StackNames from './StackNames';
import MainTabs from './Tabs/MainTabs';
import SharedStack from './Stacks/Shared.stack';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <Stack.Screen name={StackNames.MainTabs} component={MainTabs} />
      <Stack.Screen name={StackNames.SharedStack} component={SharedStack} />
    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  [StackNames.AuthStack]: undefined;
  [StackNames.MainTabs]: undefined;
};
