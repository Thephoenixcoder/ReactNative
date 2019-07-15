import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import  Homescreen  from './component/Homescreen';
import  ProductScreen  from './component/Productdetail';

const StackNavigator = createStackNavigator({
    Home:Homescreen,
    Product:ProductScreen
})

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;