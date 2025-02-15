import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/mainStack';
import ScreenNames from '../../navigation/ScreenNames';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {useFavStore} from '../../store/useFavStore';

export default function ArticleDatails() {
  const {goBack} = useNavigation();
  const {params} =
    useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
  const {article} = params ?? {};
  console.log('ArticleDatails : ', article);

  const {description, source, title, urlToImage} = article ?? {};
  const {addToFavList} = useFavStore();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={goBack}>
            <Icon name="chevron-thin-left" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: urlToImage,
          }}
          style={styles.coverImg}
        />
        <View style={styles.dataCont}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addTofavBtn}
        onPress={() => {
          addToFavList(article);
        }}>
        <Text style={styles.addToFavText}>Add To Fav</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
