//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableHighlight} from 'react-native';

// create a component
class Homescreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate("Product")}>
            <Text>
                go to productDetails
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
export default Homescreen;
