//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Title = (props) => {
    const {fontsizes,color,position,title,align}=props
    return (
        <View style={styles.container}>
            <Text style={{fontSize:fontsizes,color:color,flexDirection:position,textAlign:align}}>{props.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row'
    },
});

//make this component available to the app
export {Title};
