/*
Task: This file loads a set of sample data for demo purposes and returns ItemCards for each demo item
Parameters: prop handles passed in properties from the <DemoItems> tag. The only
property is zipcode which is used to show sets of items from that zipcode
Error Handling: N/A
Author: Sam Pennington
*/
import React from "react";
import {Text, View,TouchableOpacity} from 'react-native';
import ItemCard from "../Components/itemCard.js";

var itemJson = require('./demoItems.json')

export default function DemoItems(props){
  let itemsInCode = itemJson[props.zipCode];
  try{
    let keyArray = Object.keys(itemJson[props.zipCode]);

    let itemString = "";
    return(
      <View>
      {
        keyArray.map((key)=>{
          return(
            <ItemCard  key={itemsInCode[key].item} item={itemsInCode[key].item} sellerName={key} price={itemsInCode[key].price} source={itemsInCode[key].src}/>        
          )
        })
      }
      </View>
    );
  }
  catch(e){
    console.log(e);
    return(
      <View></View>
    );
  }

}
