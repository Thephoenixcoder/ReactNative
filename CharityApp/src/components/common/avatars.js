//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';

// create a component
const Avatar = (props) => {
    const {widthe,heighte,url,paddingpd,radiuse,directione,marginbtm}=props
    return (
        <View style={{width:widthe,height:heighte,padding:paddingpd,radius:radiuse,flexDirection:directione,justifyContent:'center'}}>
          <Image style={{width:widthe,height:heighte}} source={{ uri: url }}></Image>
        </View>
    );
};


//make this component available to the app
export {Avatar};
