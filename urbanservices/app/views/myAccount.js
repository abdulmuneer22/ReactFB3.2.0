'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage
} from 'react-native';





class MyAccount extends Component {

// Constructor
constructor(props){
super(props)
this.state = {
  accessToken : this.props.accessToken,
 
}

}


finduserName(uid){
  new Firebase("https://todoappmuneer.firebaseio.com/production/users")

}
 
  render() {

    return (
      <View style={styles.container}>
        <Text>My Account Details</Text>
        <Text>Your accessToken :</Text>
        <Text>{this.state.accessToken}</Text>
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
  }
 
});

export default MyAccount
