//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
// create a component
const Heart = (props) => {
    const { flag,onTouch,colors } = props
    return (
        <View style={styles.container}>
            <Icon
               
                name='heart'
                size={30}
                type='antdesign'
                color={colors||'#fff'}
                onPress={props.onTouch} />
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        padding: 5,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 4,

    },
    title: {

    }
});

//make this component available to the app
export { Heart };


