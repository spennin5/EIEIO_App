import * as React from 'react';
import { View, Text } from 'react-native';

function ItemCard(props) {
  return(
    <Text>
    <Text>Sold by: {props.sellerName}</Text>
    {"\n"}
    <Text>They are selling: {props.item}</Text>
    </Text>
  );
}
export default ItemCard;
