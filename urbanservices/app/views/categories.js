 
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



class Categories extends Component {

redirect(routeName){

  this.props.navigator.push(
    {
      name:routeName
     
    }
    )


}

  render() {
    return (
    <View style={styles.container}>
          <Text>Services</Text>
         
         
            
          <TouchableHighlight
          onPress = {this.redirect('watercanOfferView')}
          >
          <Text>Water Can</Text>
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


export default Categories
