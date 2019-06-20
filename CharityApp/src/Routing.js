
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './components/splashscreen/splashscreen'
// create a component
const AppNavigator = createStackNavigator(
    {
        Splash: SplashScreen,
    },
    {
        initialRouteName: "Splash",
    },

);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;