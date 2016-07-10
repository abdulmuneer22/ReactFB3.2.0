/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Login from './login'
//import LandingPage from './home'
import Register from './register'


class Root extends Component {

  navigate(routeName){

    this.props.navigator.push({
      name : routeName
    })

  }


  render() {
    return (
    <View style={styles.container}>
          
          <TouchableHighlight
          onPress = {this.navigate.bind(this,'register')}
          >
          <Text>Register</Text>
          </TouchableHighlight>
          
          <Text></Text>

          <TouchableHighlight
          onPress = {this.navigate.bind(this,'login')}
          >
          <Text>Login</Text>
          </TouchableHighlight>
    </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:30
  },
});


export default Root
