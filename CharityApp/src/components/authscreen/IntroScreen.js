//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <Text>IntroScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff696b',
        height: 250
    },
});

//make this component available to the app
export { IntroScreen };
