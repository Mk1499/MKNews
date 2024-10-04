import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

import {ArticleType} from '../../types/ArticleType';
import {get} from '../../utils/helpers/apiService';

export default function MainNews() {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    getTopNews();
  }, []);

  function getTopNews() {
    const url = '/top-headlines?country=us';

    get(url)
      .then(res => {
        console.log(res.data);
        const articles = res.data?.articles?.filter(
          (article: ArticleType) => article?.urlToImage !== null,
        );
        setTopNews(articles);
      })
      .catch(err => {
        console.log('request Err : ', err);
      });
  }

  function renderNews(item: any) {
    return (
      <ImageBackground
        source={{
          uri: item.urlToImage,
        }}
        style={styles.container}
        resizeMode="cover">
        <View style={styles.whiteCont}>
          <View style={styles.redCont}>
            <Text style={styles.deadlineText}>{item.source?.name}</Text>
          </View>
          <Text style={styles.name}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <View>
      <FlatList
        data={topNews}
        renderItem={({item}) => renderNews(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}
