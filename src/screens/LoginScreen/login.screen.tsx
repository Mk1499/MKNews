import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';

export default function LoginScreen() {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        navigate(StackNames.MainTabs);
      }}>
      <Text
        style={{
          color: 'red',
        }}>
        Go to Home Tabs
      </Text>
    </TouchableOpacity>
  );
}
