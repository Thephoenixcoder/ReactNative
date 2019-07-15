import React ,{Component} from 'react';
import { View, Text } from 'react-native';
import StackNavigator from './src/routing';

class App extends Component{

   
    render(){

        return(<StackNavigator />)
    }

}

export default App;