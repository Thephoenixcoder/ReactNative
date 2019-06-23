//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Card, CardSection,Spinner } from '../common'
import { Input, Icon,Button,SocialIcon } from 'react-native-elements'

// create a component
class LoginFlow extends Component {
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {  
            Email:'',
            Password:'',
            Error:'',
            Loading:false
        };  
    }  
    
    renderButton =()=>{
        if (this.state.Loading) return <Spinner  size="large" />
        return(
            
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

    onLoginPress(){
        this.setState({ ErrorEmail: '',ErrorPassword:'', Loading: true })
        const {email,password}=this.state
        if(email=="Test@test.com" && password=="test")this.onLoginSuccess()
        this.onLoginField()
    }
    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            Error: '',
           
            Loading: false
          })
    }

    onLoginField = () => {
        this.setState({
            Error: 'This Email Invalid',
            Loading: false
          })
    }
    createAccount = () => {
        // this.props.navigation.navigate('signup')
    }
    render() {
        // const { navigate } = this.props.navigation;  
        return (
            <View style={styles.container}>
                <Card >
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
                            value={this.state.Email}
                            onChangeText={email=>this.setState({Email:email})}


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
                            value={this.state.Password}
                            secureTextEntry={true}
                            onChangeText={password=>this.setState({Password:password})}
                            
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
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('signup')}>
                    <Text style={styles.create} >Create New Account </Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button:{
        borderRadius:30,
        width:'100%',
        padding:14,
        
        
    },
    icon:{
        marginLeft:20
    },
    iconinput:{
         paddingTop:25
    },
    createaccount:{
        textAlign:'center'
    },
    create:{
        textAlign:'center',
        color:'red',
        marginTop:10
    },
    error:{
        color:'red',
        textAlign:'center'

    }
    
   
});

//make this component available to the app
export {LoginFlow} ;
