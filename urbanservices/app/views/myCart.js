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
  ListView,
  ScrollView,
  Image,
  Dimensions,
  AsyncStorage

} from 'react-native';


import firebase from 'firebase'

const window = Dimensions.get('window');

class MyCart extends Component {
constructor(){
  super();
  this.state = {
    email : "email",
    address : "",
    uid : "",
    sku : "",
    quantity : "1"

  }
}



onCheckout(){


}



placeOrder(){
  var userEmail = firebase.auth().currentUser.email;
  var sku = this.props.sku
  var orderID = Date.now()
  var quantity = 1
  var vendorID = "W001"
  var orderDate = "10102016"
  var UserID = firebase.auth().currentUser.uid


  firebase.database().ref('urbanservices/Orders/'+UserID+'/'+orderID).update({
        OrderID : orderID,
        userEmail : userEmail,
        SKU : sku,
        Quantity : quantity,
        VendorID : vendorID,
        OrderDate : orderDate,
        UserID : UserID
  },()=>{
    alert("Thank you for your order !!! Your Order ID is "+orderID+" We Will Deliver your Order In Next 60 Minutes")
  });



}

  render(){
    return(

     <View style={styles.container}>

       <View style={styles.cartItemsWrapper}>
              <View style={styles.cartItemsImageWrapper}>
              <Image
              style = {styles.dpImage}
              source = {{uri: 'http://4.imimg.com/data4/OF/BI/MY-23505475/mineral-water-can-250x250.jpg'}}
              resizeMode = {Image.resizeMode.contain}
          
            />
              </View>
              <View style={styles.cart}>
              <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>{this.props.title}</Text>
              
              <Text style={{textAlign:'center'}}>Reverse osmosised hygeninc mineral water from aquafina</Text>
              <Text style={{color:'red',marginTop : 20,fontSize : 18}}>{this.props.price}</Text>
              </View>

                

       </View>

        <TouchableHighlight 
                style={[styles.Button,styles.SkipButton]}
                onPress = 
                {this.placeOrder.bind(this)}

                >
                <Text style={styles.ButtonText}> Place Order</Text>
                </TouchableHighlight>
        <View>
          <Text>Debugger</Text>
          <Text>Email : {this.state.email}</Text>
          <Text>User ID : {this.state.uid}</Text>
          <Text>SKU : {this.props.sku}</Text>
          <Text>Qty : {this.state.quantity}</Text>
          
          
          
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
    backgroundColor: '#F5F5F5',
    flexDirection : 'column'
    
  },
  dpImage:{
    width : 120,
    height : 140,
    alignSelf:'center'
    
  },
  cartItemsWrapper:{
    flexDirection : 'row',
    //borderColor : '#FAFAFA',
    //borderWidth : 1,
    width:window.width*0.95,
    height : 150,
    backgroundColor : '#FFFFFF',
    marginTop : 20
    
    //marginLeft : 20,
    //marginRight : 20
    //alignSelf : 'center'
  },
  cartItemsImageWrapper:{
    flex : 5,
    //borderColor : 'red',
    //borderWidth : 1
  },
  cart:{
    flex : 8,
    //borderColor : 'green',
    //borderWidth : 1,
    marginTop : 20,
    alignItems : 'center'
  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.95, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10,
  marginTop : 10
  
  },
  ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }
  
});


export default MyCart
