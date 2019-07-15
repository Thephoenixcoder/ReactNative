//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const CircleIcon = (props) => {
    const {backgroundtype,title,bordercolors,paddings}=props
    return (
      
        <View style={[styles.container,{padding:paddings||8},{backgroundColor:backgroundtype||'#fff'}]}>
            <View style={[{borderColor:bordercolors,borderWidth:2},styles.borderwrap]}>
                <Text>Donate</Text>
                <Text>{props.title}</Text>
            </View>
        </View>
  
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        width: 80,
        height: 80,
        borderRadius: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    borderwrap:{
        width:75,
        height:75,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        }
});

//make this component available to the app
export { CircleIcon };
