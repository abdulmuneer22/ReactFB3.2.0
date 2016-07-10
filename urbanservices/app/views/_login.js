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

import Firebase from 'firebase';
import NavigationBar from './NavigationBar'
 

const window = Dimensions.get('window');
const ACCESS_TOKEN = 'access_token'
const EMAIL = 'email'
const UID = 'uid'


class LogIn extends Component {

// Constructor
constructor(){
super()
this.state = {
  email : "",
  password : "",
  isLoggedIn : "",
  emptyPassWordEmailError : "",
  UserID : "",
  user_name : ""


}

}


redirect(routeName,token){

  this.props.navigator.push(
    {
      name:routeName,
      passProps : {
        accessToken : token
      }
    }
    )


}


async storeToken(email,userID){
  try{

    //await AsyncStorage.setItem(EMAIL,email)
    await AsyncStorage.setItem("UID",userID)
    

  }catch(error){
    alert("Could not store ACCESS_TOKEN")
  }

}

async getToken(){
  try{
    
    await AsyncStorage.getItem('Email')
    .then((value)=>{
      //alert("Email ID is "+value)
    })
    
    await AsyncStorage.getItem('UID')
    .then((userID)=>{
      //alert("UID is "+test)
      this.setState({
        UserID : userID
      })
    })
    /*
    await AsyncStorage.getItem('UserName')
    .then((userName)=>{
      alert("User Name is "+userName)
      this.setState({
        user_name : userName
      })
    })
    */
    var _accessTokenSize = String(this.state.UserID).length
    //alert(_accessTokenSize)

    if(String(_accessToken).length > 4){
    this.setState({
      isLoggedIn : true
    })
    //alert(this.state.isLoggedIn)
    // also pass user name to next screen
    
    }else{

    }
  }catch(error){
    //alert(error)
  }

}


async removeToken(accessToken){
  try{

    await AsyncStorage.removeItem(ACCESS_TOKEN,accessToken)

  }catch(error){
    alert("Could not remove ACCESS_TOKEN")
  }

}




onSignInPress(){
  if(!this.state.email || !this.state.password){
    
    this.setState({
      emptyPassWordEmailError : "Email or Password is Empty"
    })
    
    
    //alert("error")
  }else{
    this.setState({
      emptyPassWordEmailError : ""
    })}

  let app = new Firebase("https://todoappmuneer.firebaseio.com/")
  //let userNode = new Firebase("https://todoappmuneer.firebaseio.com/production/users/"+user_name)

  app.authWithPassword({

        'email':this.state.email,
        'password':this.state.password,

        },
  (error,authData) => 
  {
    if(error)
    {
      
      //alert(error.code)
      switch(error.code){
        case 'INVALID_PASSWORD':
          alert("Incorrect Password Or Email")
          break
        case 'INVALID_USER':
          alert("New User ? Please Register With Us")
          break
        
        default :
          alert(error.code)



      }
      this.removeToken();
    }else
    {
       
         let _email = authData.password.email
         let _uid = authData.uid
         this.storeToken(_email,_uid)
         this.getToken()
         this.redirect('mainScreen')
    }

    


    }
  );
 }

onSkipPress(){
  this.removeToken();
  var faketoken = "none"
  this.redirect('mainScreen',faketoken)

}


componentWillMount(){
  
  this.getToken()
  if(this.state.isLoggedIn = true){
    //alert("Logged In")
    //this.redirect('mainScreen')
  }else{
    alert("Not Logged In")
  }
  
}


  render() {
    return (
     <View>
        <NavigationBar title={"Sign In"}/>
     
      <View style={styles.container}>
      <View style={styles.formWrapper}>
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
      style={styles.Button}
      onPress = 
      {this.onSignInPress.bind(this)}

      >
      <Text style={styles.ButtonText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight 
      style={[styles.Button,styles.SkipButton]}
      onPress = 
      {this.onSkipPress.bind(this)}

      >
      <Text style={styles.ButtonText}>Skip >> </Text>
      </TouchableHighlight>
      <View>
      {this.state.emptyPassWordEmailError ?(<Text style={{color : '#ff1744'}}>{this.state.emptyPassWordEmailError}</Text>):(<Text></Text>)}
      </View>

      </View>
      </View>
      

</View>

        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //height:window.height-100
  },
  formWrapper:
  
  {
    justifyContent:'center',
    marginTop : window.height*0.2

  },

  input :{
      
      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      borderColor : 'red'
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.7, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10,
  marginTop : 10
  
  },
  SkipButton:{
    backgroundColor : '#37474F',
    borderColor : '#37474F'
  },

  ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }
 
});

export default LogIn
