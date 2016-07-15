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
  Navigator,
  AsyncStorage
} from 'react-native';

/*
import Root from './app/views/root'


import MyAccount from './app/views/myAccount'
import Categories from './app/views/categories'

*/
import Register from './app/views/register'
import LogIn from './app/views/login'
import MainScreen from './app/views/mainScreen'
import UpdateAddress from './app/views/updateAddress'
import WaterCan from './app/views/watercan'
import MyCart from './app/views/myCart'


class urbanservices extends Component {
constructor(){
  super();
  
  this.state = {
    _initialRoute : 'register'
  }

}


renderScene(route,navigator){
  
  if(route.name == 'mainScreen'){
      return <MainScreen  navigator={navigator} />
    }

  
  if(route.name == 'root'){
      return <Root  navigator={navigator}/>
    }

  if(route.name == 'home'){
      return <Landingpage  navigator={navigator}/>
    }
  
  
  if(route.name == 'register'){
      return <Register  navigator={navigator}/>
    }

  if(route.name == 'login'){
    return <LogIn  navigator={navigator}/>
  }

  if(route.name == 'myaccount'){
    return <MyAccount  navigator={navigator} {...route.passProps}/>
  }

if(route.name == 'categories'){
    return <Categories  navigator={navigator} {...route.passProps}/>
  }

if(route.name == 'watercan'){
    return <WaterCan  navigator={navigator} {...route.passProps} />
  }

if(route.name == 'navbar'){
    return <NavBar  navigator={navigator} {...route.passProps} />
  }


if(route.name == 'myCart'){
    return <MyCart  navigator={navigator} {...route.passProps} />
  }


if(route.name == 'updateAddress'){
    return <UpdateAddress  navigator={navigator} {...route.passProps} />
  }


if(route.name == 'testview'){
    return <UpdateAddress  navigator={navigator} {...route.passProps} />
  }

  
}

configureScene(route){

  let fromleft = Navigator.SceneConfigs.FloatFromLeft

  switch(route.name){
    case 'login':
      return Navigator.SceneConfigs.FloatFromBottom

    case 'myaccount':
      return Navigator.SceneConfigs.FloatFromLeft  

    case 'register':
      return Navigator.SceneConfigs.VerticalDownSwipeJump 
     
     case 'categories':
      return Navigator.SceneConfigs.HorizontalSwipeJump
    
      case 'watercan':
      return fromleft

      case 'mainScreen':
      return Navigator.SceneConfigs.FadeAndroid

       case 'myCart':
      return Navigator.SceneConfigs.FadeAndroid


       case 'updateAddress':
      return Navigator.SceneConfigs.FadeAndroid



  }




}


  render() {
    return (
      
      <Navigator 
      style = {styles.mainscreen}
      initialRoute={{name: this.state._initialRoute}}
      renderScene={this.renderScene.bind(this)}
      //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}   
      configureScene={this.configureScene.bind(this)}    
      />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:10
  },
});

AppRegistry.registerComponent('urbanservices', () => urbanservices);
