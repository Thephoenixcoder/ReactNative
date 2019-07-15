//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'
// create a component
class Progressbar extends Component {

    render() {
        const {colors,unfilledColor,widthprog}=this.props
        return (
            <View style={styles.container}>
              <ProgressBar progress={widthprog ||0}   color={colors||'#69d2ff'} borderColor={unfilledColor||'#fff'} borderWidth={0} borderRadius={10} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: '#f8f8f8',
    },
});

//make this component available to the app
export {Progressbar};
