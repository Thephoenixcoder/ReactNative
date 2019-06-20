import React, {Component} from 'react';
import { StyleSheet, Text,View} from 'react-native';
import Routing from './Routing'


 class App extends Component {
  render() {
    return( 
        <View style={{flex:1}}>
          <Routing/>
        </View>
      )
   }
}
export default App

