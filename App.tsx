/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import './gesture-handler';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
