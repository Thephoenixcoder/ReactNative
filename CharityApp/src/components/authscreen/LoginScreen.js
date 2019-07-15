//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardSection, Spinner } from '../common'
import { Input, Icon, Button, SocialIcon } from 'react-native-elements'
import { IntroScreen } from '../authscreen'
 
// create a component
class LoginFlow extends Component {
    constructor(props) {
        //constructor to set default state  
        super(props);
        this.state = {
            Email: '',
            Password: '',
            Error: '',
            Loading: false
        };
    }

    renderButton = () => {
        if (this.state.Loading) return <Spinner size="large" />
        return (

            <Button
                icon={
                    <Icon
                        name="rightcircle"
                        size={25}
                        color="white"
                        type='antdesign'
                        iconStyle={styles.icon}
                    />
                }
                iconRight
                title="Login with Account"
                buttonStyle={styles.button}
                onPress={this.onLoginPress.bind(this)}
            />

        )
    }

    onLoginPress() {
        this.setState({ Error: '', Loading: true })
        const { Email, Password } = this.state;
        console.warn(Email + Password)
        if (Email == "Test@test.com" && Password == "test") { this.onLoginSuccess() } else {
            this.onLoginField()
        }
    }
    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            Error: '',

            Loading: false
        })
        this.props.navigation.navigate('HomeScreen')
    }

    onLoginField = () => {
        this.setState({
            Error: 'This Authentaction Field',
            Loading: false
        })
    }
    createAccount = () => {
        this.props.navigation.navigate('signup')
    }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <IntroScreen />
                <Card >
                    <CardSection widthcd="90%">

                        <Icon
                            name='user'
                            type='antdesign'
                            color='#ff696a'
                            size={35}
                            iconStyle={styles.iconinput}

                        />
                        <Input
                            placeholder='Test@test.com'
                            inputStyle={styles.Input}
                            label="Email"
                            labelStyle={styles.labels}
                            value={this.state.Email}
                            onChangeText={email => this.setState({ Email: email })}


                        />


                    </CardSection>
                    <CardSection  widthcd="90%">
                        <Icon
                            name='lock'
                            type='antdesign'
                            color='#ff696a'
                            size={35}
                            iconStyle={styles.iconinput}
                        />
                        <Input
                            placeholder='Password'
                            inputStyle={styles.Input}
                            label="Password"
                            labelStyle={styles.labels}
                            value={this.state.Password}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ Password: password })}

                        />

                    </CardSection>
                    <Text style={styles.error}>{this.state.Error}</Text>
                </Card>
                <Card bgcolor='#eee'>
                    {this.renderButton()}
                    <SocialIcon
                        title='LogIn With Facebook'
                        button
                        type='facebook'
                    />
                </Card>
                <Card bgcolor='#eee'>

                    <Text style={styles.createaccount} >Don't Have Account yet Create New one  ?</Text>
                    <TouchableOpacity onPress={() => this.createAccount()}>
                        <Text style={styles.create} >Create New Account </Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    button: {
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        elevation: 2,
        margin: 7


    },

    icon: {
        marginLeft: 20
    },
    iconinput: {
        paddingTop: 30,
        fontSize: 25
    },
    createaccount: {
        textAlign: 'center'
    },
    create: {
        textAlign: 'center',
        color: 'red',
        marginTop: 10
    },
    error: {
        color: 'red',
        textAlign: 'center'

    },
    labels: {
        marginBottom: -10,

    },
    Input: {
        minHeight: 20,
        fontSize: 14
    }


});

//make this component available to the app
export { LoginFlow };
