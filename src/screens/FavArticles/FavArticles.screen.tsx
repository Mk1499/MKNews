import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';

export default function FavArticlesScreen() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome in FavArticlesScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigate(StackNames.SharedStack, {
            screen: ScreenNames.ArticleDetails,
          });
        }}>
        <Text>Go to Fav Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
