//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardSection = (props) => {
    const {direction,widthcd,paddingtext,align,alignItem,heit,justifytext,bgcolorcard,brradius}=props
    return (
        <View  style={[{flexDirection:direction||'row'},{height:heit},{justifyContent:justifytext},{width:widthcd},{padding:paddingtext||0},{textAlign:align||'center'},{backgroundColor:bgcolorcard||'#fff'},{alignItems:alignItem||'center'},{borderRadius:brradius}]}>
           {props.children}
        </View>
    );
};

// define your styles

//make this component available to the app
export {CardSection};
