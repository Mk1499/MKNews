import {View, FlatList, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useFavStore} from '../../store/useFavStore';
import {ArticleType} from '../../types/ArticleType';
import ArticleCard from '../../components/ArticleCard/ArticleCard.comp';

export default function FavArticlesScreen() {
  const {navigate} = useNavigation();
  const {favList} = useFavStore();

  function renderItem(item: ArticleType) {
    return <ArticleCard item={item} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourt Articles</Text>
      <FlatList data={favList} renderItem={({item}) => renderItem(item)} />
    </View>
  );
}
