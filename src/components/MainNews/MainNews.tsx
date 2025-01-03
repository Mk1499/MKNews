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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import {MainStackParamList} from '../../navigation/mainStack';

export default function MainNews() {
  const [topNews, setTopNews] = useState([]);
  const {navigate} =
    useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

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

  function gotoArticleDetails(article: ArticleType) {
    navigate(ScreenNames.ArticleDetails, {
      article,
    });
  }

  function renderNews(item: ArticleType) {
    return (
      <TouchableOpacity onPress={() => gotoArticleDetails(item)}>
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
      </TouchableOpacity>
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
