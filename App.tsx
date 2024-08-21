/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
