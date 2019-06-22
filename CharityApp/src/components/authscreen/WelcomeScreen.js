//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const WelcomeFlow = () => {

    return (

        <View style={styles.container}>

            <Text>WelcomeFlow</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});

//make this component available to the app
export { WelcomeFlow };
