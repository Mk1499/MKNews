import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import ScreenNames from '../../navigation/ScreenNames';

export default function Header() {
  const {navigate} = useNavigation();

  function handleGotoSettings() {
    navigate(ScreenNames.SettingsScreen);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGotoSettings}>
        <Image
          style={styles.img}
          source={require('../../assets/images/boy.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>MK News</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/note.png')}
      />
    </View>
  );
}
