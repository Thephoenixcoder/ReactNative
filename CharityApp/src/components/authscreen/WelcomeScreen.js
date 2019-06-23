//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { IntroScreen ,LoginFlow} from '../authscreen'

// create a component
const WelcomeFlow = () => {

    return (

        <ScrollView style={styles.container}>
            <IntroScreen />
            <LoginFlow />
        </ScrollView>
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
