//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class EventScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('itemName', 'Details Screen'),
        };
      };
    render() {
        const { navigation } = this.props;
        const itemName = navigation.getParam('itemdetails', 'some default value');
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(itemName)}</Text>
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
        
    },
});

//make this component available to the app
export {EventScreen};
