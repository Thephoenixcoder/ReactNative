//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
// create a component
const CircleIcon = (props) => {
    const {backgroundtype,title,bordercolors,paddings,url,wdth,heit,wdth2,heit2,widthimg,heightimg,top}=props
    return (
      
        <View  style={[styles.container,{padding:paddings||5},{backgroundColor:backgroundtype||'#fff'},{width:wdth||100},{height:heit||100},{top:top||'-70%'}]}>
            <View style={[{borderColor:bordercolors,borderWidth:2},styles.borderwrap,{width:wdth2||95},{height:heit2||95}]}>
            <Image
                  source={{ uri: url }}
                style={[styles.Image,{width:widthimg||60},{height:heightimg||60}]}

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
      
        borderRadius: 95,
        justifyContent: 'center',
        alignItems: 'center',
        },
        Image:{
            width:60,
            height:60
        }
});

//make this component available to the app
export { CircleIcon };
