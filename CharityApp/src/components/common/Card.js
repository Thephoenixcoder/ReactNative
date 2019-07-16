//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Card = (props) => {
    const {bgcolor,paddingpd,margtop,margleft,margright,brdradius,flexdir,heit}=props;
    

    return (
        <View style={[{backgroundColor:bgcolor||'#fff'},{padding:paddingpd||15},{height:heit},{marginTop:margtop||15},{marginLeft:margleft||20},{marginRight:margright||20},{borderRadius:brdradius||10},{flexDirection:flexdir||'column'}]}>
              {props.children}
        </View>
    );
};



//make this component available to the app
export {Card};
