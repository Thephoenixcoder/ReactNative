//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Circle  from 'react-native-progress/Bar'
// create a component
class Circleprogress extends Component {

    render() {
        const {colors,unfilledColor,widthprog}=this.props
        return (
            <View style={styles.container}>
              <Circle size={100}  fill="red"  strokeCap="round"  endAngle={1}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
     width:50,
     height:50
    },
});

//make this component available to the app
export {Circleprogress};
