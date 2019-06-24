//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardSection, Spinner } from '../common'
import { Input, Icon, Button, SocialIcon } from 'react-native-elements'
import { IntroScreen } from '../authscreen'
// create a component
class CreateAccountFlow extends Component {
    constructor(props) {
        //constructor to set default state  
        super(props);
        this.state = {
            Email: '',
            Password: '',
            FullName: '',
            MobileNo: '',
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
                title="Create Account"
                buttonStyle={styles.button}
                onPress={this.loginAccount.bind(this)}
            />

        )
    }

    onLoginPress() {
        this.setState({ Error: '', Loading: true })
        const { email, password } = this.state

    }

    loginAccount() {
        this.props.navigation.navigate('login')
    }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>

                <Card >
                    <CardSection>

                        <Icon
                            name='slack'
                            type='antdesign'
                            color='#ff696a'
                            size={35}
                            iconStyle={styles.iconinput}

                        />
                        <Input
                            placeholder='John Doe'
                            inputStyle={styles.Input}
                            label="FullName"
                            labelStyle={styles.labels}
                            value={this.state.FullName}
                            onChangeText={fullname => this.setState({ FullName: fullname })}


                        />


                    </CardSection>

                    <CardSection>

                        <Icon
                            name='mobile1'
                            type='antdesign'
                            color='#ff696a'
                            size={35}
                            iconStyle={styles.iconinput}

                        />
                        <Input
                            placeholder='+01 011220..'
                            inputStyle={styles.Input}
                            label="Mobile"
                            inputStyle={styles.Input}
                            labelStyle={styles.labels}
                            value={this.state.MobileNo}
                            onChangeText={mobno => this.setState({ MobileNo: mobno })}


                        />


                    </CardSection>

                    <CardSection>

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
                            inputStyle={styles.Input}
                            value={this.state.Email}
                            onChangeText={email => this.setState({ Email: email })}


                        />


                    </CardSection>



                    <CardSection>
                        <Icon
                            name='lock'
                            type='antdesign'
                            color='#ff696a'
                            size={35}
                            iconStyle={styles.iconinput}
                        />
                        <Input
                            placeholder='Password'
                            label="Password"
                            labelStyle={styles.labels}
                            value={this.state.Password}
                            secureTextEntry={true}
                            inputStyle={styles.Input}
                            onChangeText={password => this.setState({ Password: password })}

                        />

                    </CardSection>
                    <CardSection>
                        <Icon
                            name='lock'
                            type='antdesign'
                            color='#ff696a'
                            size={35}
                            iconStyle={styles.iconinput}
                        />
                        <Input
                            placeholder='Confirm Password'
                            label="Confirm Password"
                            labelStyle={styles.labels}
                            value={this.state.Password}
                            secureTextEntry={true}
                            inputStyle={styles.Input}
                            onChangeText={password => this.setState({ Password: password })}

                        />

                    </CardSection>
                    <Text style={styles.error}>{this.state.Error}</Text>
                </Card>
                <Card bgcolor='#eee'>
                    {this.renderButton()}
                    <SocialIcon
                        title='Signup With Facebook'
                        button
                        type='facebook'
                    />
                </Card>
                <Card bgcolor='#eee'>

                    <Text style={styles.createaccount} >Already Have Account</Text>
                    <TouchableOpacity onPress={() => this.loginAccount()}>
                        <Text style={styles.create} >Login </Text>
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
    Input: {

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
export { CreateAccountFlow };
