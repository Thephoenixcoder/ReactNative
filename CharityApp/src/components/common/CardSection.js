//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardSection = (props) => {
    const {direction}=props
    return (
        <View  style={[styles.container,{flexDirection:direction||'row'}]}>
           {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'90%',
        alignItems:'center',
     },
});

//make this component available to the app
export {CardSection};
