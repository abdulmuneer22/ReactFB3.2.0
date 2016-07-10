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

class UpdateAddress extends Component {

// Constructor
constructor(){
super()
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






 onUpdateAddress(){
  // Pass User Name as props so we can use it here    
  let user_name = this.state.name      
  let app = new Firebase("https://todoappmuneer.firebaseio.com/production/users/"+user_name)


    app.createUser({
    'email':this.state.email,
    'password':this.state.password,

    },(error) => {

                    if(error)
                    {alert(error.code)}
                    else{
                      //Update this user to https://todoappmuneer.firebaseio.com/ 
                       
                          app.update({
                             
                              name: this.state.name,
                              email : this.state.email,
                              });
                    //alert("Your Account Created Successfully !!")
                   
                    this.redirect('login')


                    }
                    }

  );
}



  render() {
    return (
      <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      placeholder="Address:" 
      onChangeText = {(text) => this.setState({address_1:text})} 
      value={this.state.address_1}
      />
      
      <TextInput 
      style={styles.input} 
      placeholder="Address:" 
      onChangeText = {(text) => this.setState({address_2:text})} 
      value={this.state.address_2}
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
