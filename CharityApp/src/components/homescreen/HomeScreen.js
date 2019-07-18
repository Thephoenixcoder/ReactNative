//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import {TabScreen,EventCategories} from './index';

// create a component

class HomeScreen extends Component {
  
    state={
        events:[] 
    }
      
    render() {

        return (
            <TabScreen>
               
               <EventCategories  tabLabel="Eventcat1"/>
               <EventCategories  tabLabel="Eventcat2"/>
               <EventCategories  tabLabel="Eventcat3"/>
               <EventCategories  tabLabel="Eventcat4"/>
               
               
             
            </TabScreen>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
});

//make this component available to the app
export { HomeScreen };
