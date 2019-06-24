//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

// create a component
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/heart.png')}
                style={styles.Image}

            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff696b',
        height: 240
    },
    Image: {
        height: 164
    }
});

//make this component available to the app
export { IntroScreen };
