/*
Task: This file defines the ItemCard component
Parameters: props holds the passed in sellerName, item, and price to be displayed
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { View,ScrollView, Text, Image } from 'react-native';

//Reusable component holding information about items for sale.
//TODO: add in pictures of items
function ItemCard(props) {
  
  //No idea if this works

  return(
    <View>
      <ScrollView horizontal>
        <View>
          <Image source={props.source}/>
          <Text>Seller: {props.sellerName}</Text>
          <Text>Item: {props.item}</Text>
          <Text>Price: {props.price}</Text>
        </View>
        </ScrollView>
    </View>
  );
}
export default ItemCard;
