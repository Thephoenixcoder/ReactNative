//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
        key: 'image1',
        title: 'Donate for Homelesss People',
        text: 'Description.\nSay something cool',
        image: require('../../../assets/1.png'),
        backgroundColor: '#229145',
        color: '#f8f8f8'
    },
    {
        key: 'image2',
        title: 'Donate for Homelesss children',
        text: 'Description.\nSay something cool',
        image: require('../../../assets/2.png'),
        backgroundColor: '#fff',
        color: '#000'
    },
    {
        key: 'image3',
        title: 'Donate For Homelesss Animals',
        text: 'Description.\nSay something cool',
        image: require('../../../assets/3.png'),
        backgroundColor: '#f9bc3f',
        color: '#fff'
    },
    {
        key: 'image4',
        title: 'Donate For Environment',
        text: 'Description.\nSay something cool',
        image: require('../../../assets/4.png'),
        backgroundColor: '#fff',
        color: '#000'
    },
];
// create a component
class splashscreen extends Component {
    state = {
        showRealApp: false
    }
    _renderItem = (item) => {
        return (

            <View style={{ backgroundColor: item.backgroundColor, flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>

            </View>

        );
    }

    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.props.navigation.navigate('Welcome')

    }
    render() {
        if (this.state.showRealApp) {
            return <splashscreen />;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} buttonTextStyle={{ color: '#2f3841' }} />;
        }
    }
}
const styles = StyleSheet.create({

    image: {
        width: 400,

    },
    text: {
        color: '#2f3841',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
        color: '#2f3841'
    }
});

//make this component available to the app
export default splashscreen;
