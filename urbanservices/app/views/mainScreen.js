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
  Image
} from 'react-native';

import firebase from 'firebase';
import NavigationBar from './NavigationBar'
import Dimensions from 'Dimensions'

var ConditionalView = null
var useridlength = 0

const window  = Dimensions.get('window')
const windowWidth = window.width
const UID = 'uid'
const EMAIL = 'email'
const uidLength = '0'

class MainScreen extends Component {
constructor(){
  super();
  this.state = {
    currentUser : "",
    isLoggedIn : false
  }
}

getUser(){
  

}


redirect(routeName){

  this.props.navigator.push(
    {
      name:routeName
      
    }
    )


}
    
componentWillMount(){
  
  var _currentUser = firebase.auth().currentUser;
  
  //console.log(_currentUser.email)
  
  this.setState({
          currentUser : _currentUser
          
        })
 

  
}    

    

 
  
render() {
 
    
return (

          
          <Image style = {styles.homeBgImage}
          source={require('./res/home_bg.png')}>

          <NavigationBar title={"Urban Services"}/>
          
         
          <View style={{flex : 1}}>

          <View style={{flex : 1,justifyContent:'center'}} >
          <Text style={styles.homeButtonText}>Services</Text>
          </View>

          <View style={{flex : 1,alignItems:'center'}} >

          <TouchableHighlight 
          style={styles.homeButton}
          onPress={this.redirect.bind(this,'watercan',this.props.authData)}
          >
          <Text style={styles.homeButtonText}>Water Can</Text>
          </TouchableHighlight> 



          </View>

          <View style={{flex : 1,alignItems:'center'}} >
          <TouchableHighlight style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Laundry</Text>
          </TouchableHighlight>
          </View>




          {
            !this.state.currentUser ? 
            
            
            <View style={{
              flex : 2,
              //borderColor:'red',
              //borderWidth:1
              }} >

              <View style={{
              flex : 1,
              //borderColor:'green',
              //borderWidth:1
              }}>
              </View>



              <View style={{
              flex : 1,
              flexDirection: 'row',
              //borderColor:'green',
              //borderWidth:1,
              marginLeft:30,
              marginRight:30
              }}>



              <View style={{flex:1}}>
              <TouchableHighlight 
              style={styles.SignInButton}
              onPress={this.redirect.bind(this,'login')}
              >
              <Text style={styles.SignInButtonText}>Sign In</Text>
              </TouchableHighlight>
              </View>

              <View style={{flex:1}}>
              <TouchableHighlight 
              style={styles.SignInButton}
              onPress={this.redirect.bind(this,'register')}
              >
              <Text style={styles.SignInButtonText}>Register</Text>
              </TouchableHighlight>
              </View>


              </View>

              <Text 
              style={{
              textAlign:'center',
              marginLeft:10,
              marginRight:10,
              //marginTop:20,
              marginBottom : 20,
              color:'#80CBC4'}}>
              By continuing using this application, you agree to our Terms & Conditions
              </Text>
  </View>
            
            
            :null}



          </View>

          <View>
            <Text>Debugger : {this.state.currentUser ? <Text>{this.state.currentUser.email}</Text> : null}</Text>
          </View>


          </Image>


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
  homeBgImage : {
    flex : 1,
    width : null,
    height : null,
  },
  topNavBar : {
    height : 50,
    backgroundColor : '#00bcd4',
    elevation : 10,
    justifyContent : 'center'

  },
  topNavBarTitle : {
    alignItems : 'center',
    textAlign : 'center',
    fontSize : 22,
    fontWeight : "bold",
    color : 'white'

  },
  homeButton : {

  width: windowWidth * 0.6, 
  //backgroundColor : 'green', 
  height : 80,
  borderColor : 'white',
  borderWidth : 3,
  borderRadius : 5,
  justifyContent : 'center'

  },
  homeButtonText : {
  fontSize : 28,
  textAlign : 'center',
  color : 'white'
  },


  SignInButton : {

  width: windowWidth * 0.4, 
  //backgroundColor : 'green', 
  height : 50,
  borderColor : 'white',
  borderWidth : 3,
  borderRadius : 3,
  justifyContent : 'center',
  //alignSelf : 'flexEnd'

  },

  SignInButtonText : {
  fontSize : 18,
  textAlign : 'center',
  color : 'white'
  },
});

export default MainScreen
