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
  console.log("Item:"+ props.item)
  console.log("Source:"+ props.source)

  return(
    <View>
      <ScrollView horizontal>

        <View>
          <Text>Sold by: {props.sellerName}</Text>
          <Text>They are selling: {props.item}</Text>
          <Text>Price: {props.price}</Text>
        </View>
        </ScrollView>
    </View>
  );
}
export default ItemCard;
