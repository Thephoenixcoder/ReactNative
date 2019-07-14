//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
// create a component
class Progressbar extends Component {

    render() {
        const {color,unfilledColor}=this.props
        return (
            <View style={styles.container}>
              <ProgressBar progress={1}  color={color||'#69d2ff'} borderColor={unfilledColor||'#fff'} borderWidth={0} borderRadius={10} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export {Progressbar};
