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

const window = Dimensions.get('window');
const USERID = ""
const UserName = ""
const AddressUpdated = "false"
class UpdateAddress extends Component {

// Constructor
constructor(){
super()
//this.checkIfAddressUpdated()
this.state = {
  name : "",
  email : "",
  address_1 : "",
  address_2 : "",
  pincode : "",
  mobile:"",
  
}

}



redirect(routeName){

  this.props.navigator.push(
    {
      name:routeName
      
    }
    )


}


async getToken(){

  let username =  await AsyncStorage.getItem(USERID)
  UserName = username
  //alert(username)

}


 onUpdateAddress(){
  let uid = firebase.auth().currentUser.uid

  firebase.database().ref('urbanservices/users/'+uid).update({
  _name: this.state.name,
  address_1 : this.state.address_1,
  address_2 : this.state.address_2,
  pincode : this.state.pincode,
  mobile : this.state.mobile,
  addressUpdated : "true"
 

  }); 

  this.redirect('mainScreen')


}



  render() {
    return (
      <View style={styles.container}>
     
      
      <Text>Update Your Address</Text>     
      <TextInput 
      style={styles.input} 
      placeholder="Name :" 
      onChangeText = {(text) => this.setState({name:text})} 
      value={this.state.name}
      />

     
      <TextInput 
      style={styles.input} 
      placeholder="Address :" 
      onChangeText = {(text) => this.setState({address_1:text})} 
      value={this.state.address_1}
      />
      
      <TextInput 
      style={styles.input} 
      placeholder="Address :" 
      onChangeText = {(text) => this.setState({address_2:text})} 
      value={this.state.address_2}
      />

      
      <TextInput 
      style={styles.input} 
      placeholder="Pin Code:" 
      onChangeText = {(text) => this.setState({pincode:text})} 
      value={this.state.pincode}
      />

      <TextInput 
      style={styles.input} 
      placeholder="Mobile" 
      onChangeText = {(text) => this.setState({mobile:text})} 
      value={this.state.mobile}
      />

     
      
      <TouchableHighlight 
      style={styles.Button}
      onPress = {this.onUpdateAddress.bind(this)}

      >
      <Text style={styles.ButtonText}>Continue</Text>
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
  marginBottom :10 
  
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

export default UpdateAddress
