import * as React from 'react';
import { View,ScrollView, Text } from 'react-native';
//Reusable component holding information about items for sale.
//TODO: add in pictures of items
function ItemCard(props) {
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
