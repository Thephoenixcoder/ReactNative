//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Dividerscreen = () => {
    return (
        <View style={styles.container}></View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: '#eee',
        height:2,
        marginTop:25,
        marginBottom:25
      
    },
});

//make this component available to the app
export  {Dividerscreen};
