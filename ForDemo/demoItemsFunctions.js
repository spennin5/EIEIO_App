import React from "react";
import {Text, View} from 'react-native';
import ItemCard from "../Components/itemCard.js";
var itemJson = require('./demoItems.json')

export default function DemoItems(props){
  let itemsInCode = itemJson[props.zipCode];
  console.log(itemsInCode)
  return(
    <View></View>
  );
  /*return(
    {itemsInCode.map(item=>(
      <ItemCard price
    ))}
  );*/
}
