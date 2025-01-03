import React, {useEffect, useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Header from '../../components/Header/Header';
import MainNews from '../../components/MainNews/MainNews';
import TopNews from '../../components/TopNews/TopNews';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <MainNews />
        <TopNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
