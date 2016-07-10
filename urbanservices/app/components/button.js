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
  AsyncStorage,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

class Button extends Component {

// Constructor
constructor(){
super()
this.state = {
  accessToken : "",
  email : "",
  password : "",
  password_confirmation : "",
  errors:[]


}

}


redirect(routeName,token){

  this.props.navigator.push(
    {
      name:routeName,
      passProps:{
        accessToken : token
      }
    }
    )


}


onSignInPress(){
  
  let app = new Firebase("https://todoappmuneer.firebaseio.com/")
  

  app.authWithPassword({

        'email':this.state.email,
        'password':this.state.password,

        },
  (error,authData) => 
  {
    if(error)
    {
      //alert(error.code)
      this.removeToken();
    }else
    {
         let token = authData.uid
         //alert(token)
         this.storeToken(token)
         //Update uid to firebase database ? : not necessry


         // Seller is authnticated , redirect him to myaccount page
          this.redirect('mainScreen',token)
    }

    


    }
  );
 }




  render() {
    return (
      <View style={styles.container}>
      
      <TextInput 
      style={styles.input} 
      placeholder="Email" 
      onChangeText = {(text) => this.setState({email:text})} 
      value={this.state.email}
      />
      
 
      <TextInput 
      style={styles.input} 
      placeholder="Password" 
      secureTextEntry = {true}
      onChangeText = {(text) => this.setState({password:text})} 
      value={this.state.password}
      />

      
      <TouchableHighlight
        onPress = {this.onSignInPress.bind(this)}
      >
      <Text>Log In</Text>
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
  },
  input :{
      //marginLeft : 10,
      //marginRight : 10,
      //marginBotton : 0,
      //paddingBottom : 0,    
      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      borderColor : 'red'
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  }
 
});

export default Button
