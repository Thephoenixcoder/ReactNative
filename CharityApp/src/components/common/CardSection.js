//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardSection = (props) => {
    const {direction,widthcd}=props
    return (
        <View  style={[styles.container,{flexDirection:direction||'row'},{width:widthcd}]}>
           {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        alignItems:'center',
     },
});

//make this component available to the app
export {CardSection};
