import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {TextLoader, DotsLoader} from 'react-native-indicator';
import {connect} from 'react-redux';
import {initilizeTodos} from '../redux/action';
import {MMKV} from 'react-native-mmkv';

const SplashScreen = ({navigation, initilizeTodos}) => {
  setTimeout(() => {
    todosArrData();
  }, 1000);

  const getObj = (key) => {
    const jsonData = MMKV.getString(key);
    if (jsonData != undefined) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  };

  const todosArrData = async () => {
    const data = await getObj('todosArr');
    console.log('data=====..>>>', data);
    if (data !== '' || data != undefined || data != null) {
      await initilizeTodos(data);
      navigation.replace('AppDrawer');
    } else {
      await initilizeTodos([]);
      navigation.replace('AppDrawer');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../Assets/hado.jpg')} style={styles.logo} />
        <DotsLoader color="#0f0f0f" />
      </View>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  initilizeTodos: (data) => dispatch(initilizeTodos(data)),
});
export default connect(null, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  logo: {
    height: 150,
    width: '95%',
    resizeMode: 'contain',
  },
});
