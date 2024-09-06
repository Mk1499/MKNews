import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Header from '../../components/Header/Header';
import MainNews from '../../components/MainNews/MainNews';
import styles from './styles';

const HomeScreen = () => {
  const [textCont, setTextCont] = useState('MKK');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      alert('Un Mounting');
    };
  }, []);

  // useEffect(() => {
  //   Alert.alert('Counter or Text changed');
  // }, [textCont, counter]);

  function changeText() {
    console.log('Text Before : ', textCont);

    setTextCont('Mohamed');
    setCounter(prevValue => {
      if (prevValue % 2 === 0) {
        return prevValue + 1;
      } else {
        return prevValue + 3;
      }
    });

    console.log('After : ', textCont);
  }

  return (
    <View>
      <Header />
      <MainNews />
      <View style={styles.content}>
        <Text style={styles.text}>{textCont}</Text>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity style={styles.btn} onPress={changeText}>
          <Text style={styles.btnText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
