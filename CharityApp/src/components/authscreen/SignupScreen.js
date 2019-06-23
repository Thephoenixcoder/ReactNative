//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IntroScreen } from '../authscreen'
// create a component
class CreateAccountFlow extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                 <IntroScreen />
                <Text>CreateAccountFlow</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export { CreateAccountFlow };
