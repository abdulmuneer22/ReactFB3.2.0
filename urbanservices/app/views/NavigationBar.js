'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
 
} from 'react-native';

const window = Dimensions.get('window');

class NavigationBar extends Component {
constructor(props){
  super(props);
  this.state = {
    title : ""
  }

}

componentWillMount(){
  //alert(this.props.title)
  this.setState({
    title: this.props.title
  })
}

render() {
    
return (
     <View style={styles.containerToolbarWrapper}>
        <View style={styles.toolIcon}>
          <View style={{flexDirection:'row',alignSelf:'center',marginTop:11.5}}>
          <Image style = {styles.menuIcon}
          source={require('./res/menu.png')}/>
        </View>
        </View>

        <View style={styles.toolBarText}>
          <Text style={{marginTop : 11.5,fontSize:18,fontWeight : "300",color:'white'}}>{this.state.title}</Text>
        </View>

     </View>

  );
          }
}

const styles = StyleSheet.create({

  containerToolbarWrapper:{
    backgroundColor : "#00796B",
    height : 52,
    flexDirection : 'row',
    alignSelf:'center',
    
  },

  containerToolbar : {
    
    backgroundColor : 'black',
    width : window.width,
  },
  toolBarText:{
    flex : 6,
    height : 52 
  },
  toolIcon:{
    flex : 1.5,
    height : 52
  },
  menuIcon:{
    height:26,
    width : 26
  }

});
 

export default NavigationBar
