import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ArticleType} from '../../types/ArticleType';
import {get} from '../../utils/helpers/apiService';

export default function TopNews() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    getTopNews();
  }, []);

  function getTopNews() {
    const url = '/everything?q=egypt';

    get(url)
      .then(res => {
        console.log(res.data);
        const articles = res.data?.articles?.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setArticles(articles);
      })
      .catch(err => {
        console.log('request Err : ', err);
      });
  }

  function renderItem(item: ArticleType) {
    return (
      <View style={styles.cardCont}>
        <Image
          style={styles.cardArticelImage}
          source={{uri: item.urlToImage}}
        />
        <Text style={styles.cardArticleName}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top News</Text>
      <FlatList
        data={articles}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={styles.listCont}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
}
