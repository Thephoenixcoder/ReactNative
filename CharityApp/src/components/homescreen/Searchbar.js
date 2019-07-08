//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
// create a component
class SearchBars extends Component {
    state = {
        search: ''
    }
    updateSearch = search => {
        this.setState({ search })
    }
    searchList() {

    }
    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                    containerStyle={styles.container}
                    inputContainerStyle={styles.Inputcontainer}
                    inputStyle={styles.Input}
                    showLoading={false}
                  


                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

        backgroundColor: 'transparent',
        padding:0,
        width:'100%',
        borderColor:'#f7f7f8'
     },
    Inputcontainer: {
       
        backgroundColor: '#f7f7f8',
       
    },
    Input:{
        borderColor:'#f7f7f8'
    }

});

//make this component available to the app
export { SearchBars };
