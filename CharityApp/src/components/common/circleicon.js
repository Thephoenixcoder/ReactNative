//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CircleIcon = (props) => {
    const {backgroundtype,title,bordercolor,paddings}=props
    return (
        <View style={[styles.container,{padding:paddings||8},{backgroundColor:backgroundtype||'#fff'}]}>
            <View style={{borderColor:bordercolor}}>
            
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        width: 80,
        height: 80,
        borderRadius: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
});

//make this component available to the app
export { CircleIcon };
