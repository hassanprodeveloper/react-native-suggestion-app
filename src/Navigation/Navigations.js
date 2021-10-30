import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from './Screens';

const {Screen, Navigator} = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="SplashScreen" component={Screens.SplashScreen} />
        <Screen name="AppDrawer" component={Screens.AppDrawer} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
