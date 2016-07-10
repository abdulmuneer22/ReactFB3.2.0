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

import Firebase from 'firebase';

const window = Dimensions.get('window');

const FirebaseURL = "https://todoappmuneer.firebaseio.com/production/products/"
var ref = new Firebase(FirebaseURL)


class WaterCan extends Component {
constructor(props){
  super(props);
    this.getProducts()

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


addToCartButtonPressd(productSKU,productPrice,productTitle){
let title = productTitle
let sku = productSKU
let price = productPrice
//alert(title)

this.redirect('myCart',sku,price,title)
}

getProducts(){

 var newRef = new Firebase(FirebaseURL)

 newRef.on('value',(snap)=>{
   //console.log(snap.val())
   var items = [] 
   
   snap.forEach((child)=>{
    
            items.push({
              name : child.val().productTitle,
              price :child.val().price,
              imageurl :child.val().imageurl,
              sku : child.val().sku
              
            })

            })

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
          {rowData.name}
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
