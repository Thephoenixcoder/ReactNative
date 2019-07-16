//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class DonatedetailsScreen extends Component {
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('itemdetails', 'some default value');
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(item)}</Text>
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
export {DonatedetailsScreen};
