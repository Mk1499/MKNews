import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import MainNews from '../../components/MainNews/MainNews';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <MainNews />
    </View>
  );
};

export default HomeScreen;
