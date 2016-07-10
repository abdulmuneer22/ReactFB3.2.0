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
  ListView
} from 'react-native';

import Firebase from 'firebase';

const FirebaseURL = "https://todoappmuneer.firebaseio.com/production/products/"
var ref = new Firebase(FirebaseURL)

class ListViewTest extends Component {


renderItem(item){
  return(
    <View>
      <Text>List View Test</Text>
    </View>

  )


}

render(){
    return(

     <View>
     
    
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


export default ListViewTest
