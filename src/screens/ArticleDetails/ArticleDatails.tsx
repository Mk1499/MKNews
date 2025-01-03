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

export default function ArticleDatails() {
  const {goBack} = useNavigation();
  const {params} =
    useRoute<RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
  const {article} = params ?? {};
  const {description, source, title, urlToImage} = article ?? {};

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={goBack}>
            <Text style={styles.goBackText}>Go Back</Text>
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
    </SafeAreaView>
  );
}
