//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardSection = (props) => {
    const {direction,widthcd,paddingtext,align,alignItem}=props
    return (
        <View  style={[{flexDirection:direction||'row'},{width:widthcd},{padding:paddingtext||0},{textAlign:align||'center'},{alignItems:alignItem||'center'}]}>
           {props.children}
        </View>
    );
};

// define your styles

//make this component available to the app
export {CardSection};
