/*
Task: This file defines the ItemCard component
Parameters: props holds the passed in sellerName, item, and price to be displayed
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity } from 'react-native';
const assets = require('../ForDemo/assets.js')
//Reusable component holding information about items for sale.
//TODO: add in pictures of items
function ItemCard(props) {

  //No idea if this works
  console.log("source: "+props.source)
  const [imgSource,setImgSource] = React.useState()
  React.useEffect(()=>{
    setImgSource(props.source)
  });
  console.log(imgSource)
  return(
    <View style={styles.container}>
      <Image source={assets[props.source]} style={styles.image} />
        <View style={styles.textBox}>

          <Text>Seller: {props.sellerName}</Text>
          <Text>Item: {props.item}</Text>
          <Text>Price: {props.price}</Text>
        </View>
        <View style={styles.button}>
          <Text></Text>
          <TouchableOpacity>
            <Text style={styles.bText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox:{
    margin: 2,
    flex:3
  },
  container:{
    flexDirection:'row',
    margin:5,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
  },
  button:{
    flex:1,
    backgroundColor: '#00AB66',
  },
  bText:{
    alignSelf:'center',
    alignContent:'center'
  },
  image:{
    height:50,
    width:50,
    flex: 1,
    borderColor:'black',
    borderWidth:1
  }
});
export default ItemCard;
