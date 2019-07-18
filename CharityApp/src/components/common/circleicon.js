//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
// create a component
const CircleIcon = (props) => {
    const {backgroundtype,title,bordercolors,paddings,url}=props
    return (
      
        <View  style={[styles.container,{padding:paddings||5},{backgroundColor:backgroundtype||'#fff'}]}>
            <View style={[{borderColor:bordercolors,borderWidth:2},styles.borderwrap]}>
            <Image
                source={url} 
                style={styles.Image}

            />
            </View>
        </View>
  
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
            top:'-60%',
            
        width: 100,
        height: 100,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    borderwrap:{
        width:95,
        height:95,
        borderRadius: 95,
        justifyContent: 'center',
        alignItems: 'center',
        },
        Image:{
            width:40,
            height:40
        }
});

//make this component available to the app
export { CircleIcon };
