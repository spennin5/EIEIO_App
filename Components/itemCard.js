import * as React from 'react';
import { View,ScrollView, Text } from 'react-native';

function ItemCard(props) {
  return(
    <View>
      <ScrollView horizontal>

        <View>
          <Text>Sold by: {props.sellerName}</Text>
          <Text>They are selling: {props.item}</Text>
        </View>
        </ScrollView>
    </View>
  );
}
export default ItemCard;
