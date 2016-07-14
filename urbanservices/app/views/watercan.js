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
  Dimensions
} from 'react-native';

import NavigationBar from './NavigationBar'

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};


const window = Dimensions.get('window');





class WaterCan extends Component {
constructor(props){
  super(props);
    //firebase.initializeApp(firebaseConfig);
   // this.getProducts()

    this.state = {

      dataSource : new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,

      })
      }

    }



redirect(routeName,productSKU,productPrice,productTitle){

  this.props.navigator.push(
    {
      name:routeName,
      passProps:{
        sku : productSKU,
        price : productPrice,
        title : productTitle
      }
    }
    )


}


componentWillMount(){
  this.getProducts()
}


addToCartButtonPressd(productSKU,productPrice,productTitle){
let title = productTitle
let sku = productSKU
let price = productPrice
//alert(title)

this.redirect('myCart',sku,price,title)
}

getProducts(){

var CanRef = firebase.database().ref('urbanservices/products/watercan/')
CanRef.on('value',(can)=>{
  //alert(can.val())
  var items = []
  
  can.forEach((child)=>{
    items.push({
      title : child.val().productTitle,
      imageurl : child.val().imageurl,
      price : child.val().price,
      sku : child.val().sku,
      description : child.val().description


    })
  })

  //console.log(items)
   this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
  
})

}

 




  render(){
    return(

     <View style={styles.container}>
      <NavigationBar title={"Select A Product"}/>
      <Text></Text>
      <ScrollView showsVerticalScrollIndicator = {false}>

      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {
          (rowData)=>
          
          <View style={{borderColor:'#E0E0E0',borderWidth:1,marginBottom:20,borderRadius:1}}>
          
          <View style={styles.productTitleWrapper}>
          <Text style={styles.productTitle}>
          {rowData.title}
          </Text>
          
          <Text style={{flex : 2}}></Text>
          <Text style={styles.productPrice}>
            {rowData.price}
          </Text>
          

          
          </View>
                    
          <Image
              style = {styles.dpImage}
              source = {{uri: rowData.imageurl}}
              resizeMode = {Image.resizeMode.contain}
          
          />
          <TouchableHighlight 
          style={styles.addToCartButton}
           onPress = {this.addToCartButtonPressd.bind(this,rowData.sku,rowData.price,rowData.name)}
          
          >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableHighlight>
          
          
          </View>
        
      }
      
     
      />

      </ScrollView>
    
    </View>
    );

  }


}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    
  },
  dpImage:{
    width : 300,
    height : 420,
    alignSelf:'center'
    
  },

  productTitleWrapper:{
  flexDirection : 'row',
   width : window.width*0.9,
   height : 40,
   alignItems : 'center',
   borderBottomColor:"#BDBDBD",
   borderBottomWidth:1,
   
   
   
  },

  productTitle:{
    fontSize : 18,
    color : '#37474F',
    marginLeft : 10,
    flex : 4
  },
  productPrice : {
    fontSize : 19,
    fontWeight : "300",
    flex : 2,
    marginLeft : 10
  },
  addToCartButton : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.9, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  
  },
  addToCartButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }
});


export default WaterCan
