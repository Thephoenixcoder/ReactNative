//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Card = (props) => {
    const {bgcolor,paddingpd}=props;
    const { container} = styles

    return (
        <View style={[container,{backgroundColor:bgcolor||'#fff'},{padding:paddingpd||15}]}>
              {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       borderRadius:10,
       marginTop:25,
       marginBottom:0,
       marginLeft:20,
       marginRight:20,
      
     
        
    },
});

//make this component available to the app
export {Card};
