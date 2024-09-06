import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

const news = [
  {
    id: 1,
    title: 'news 1 title',
    source: 'source 1',
    image:
      'https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg',
  },
  {
    id: 2,
    title: 'news 2 title',
    source: 'source 2',
    image:
      'https://t4.ftcdn.net/jpg/02/18/86/55/240_F_218865580_c4Pgu6dHHNOJlU9jX61DisF0ZR8GVfcx.jpg',
  },
  {
    id: 3,
    title: 'news 2 title',
    source: 'source 3',
    image:
      'https://t4.ftcdn.net/jpg/02/55/45/55/240_F_255455531_KFMH5soxYp8rqCNYp0plHFC7OBWPOiOY.jpg',
  },
];

export default function MainNews() {
  const [topNews, setTopNews] = useState(news);

  function renderNews(item) {
    return (
      <ImageBackground
        source={{
          uri: item.image,
        }}
        style={styles.container}
        resizeMode="cover">
        <View style={styles.whiteCont}>
          <View style={styles.redCont}>
            <Text style={styles.deadlineText}>{item.source}</Text>
          </View>
          <Text style={styles.name}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  }

  function addArticle() {
    const newArticle = {
      id: 5,
      title: 'news 5 title',
      source: 'source 5',
      image:
        'https://t4.ftcdn.net/jpg/02/55/45/55/240_F_255455531_KFMH5soxYp8rqCNYp0plHFC7OBWPOiOY.jpg',
    };

    setTopNews(prevNews => [...prevNews, newArticle]);
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
      <TouchableOpacity onPress={addArticle}>
        <Text>Add Article</Text>
      </TouchableOpacity>
    </View>
  );
}
