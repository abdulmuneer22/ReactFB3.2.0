'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
 
} from 'react-native';

var ConditionalView = null
import ToolbarAndroid from 'ToolbarAndroid'

class TestView extends Component {
  
render() {
    
return (
     <View style={styles.containerToolbar}>
       <ToolbarAndroid style={styles.toolbar}
                       title="Sign In"
                       //navIcon={require('image!ic_arrow_back_white_24dp')}
                       navIcon={require('./res/menu.png')}
                       //onIconClicked={}
                        //titleColor={'#000000'}/>
                       titleColor={'#FFFFFF'}/>
                      
     </View>

  );
          }
}

const styles = StyleSheet.create({

  containerToolbar: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#3F51B5',
    height: 48,
  },


});
 

export default TestView
