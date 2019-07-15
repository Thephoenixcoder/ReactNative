//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';

// create a component
class ProductScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <TouchableHighlight onPress={()=>this.props.navigation.pop("Product")}>
                <Text>
                go to Home
                </Text> 
            </TouchableHighlight>
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
export default ProductScreen;
