/*
Task: This file loads a set of sample data for demo purposes and returns ItemCards for each demo item
Parameters: prop handles passed in properties from the <DemoItems> tag. The only
property is zipcode which is used to show sets of items from that zipcode
Error Handling: N/A
Author: Sam Pennington
*/
import React from "react";
import {Text, View} from 'react-native';
import ItemCard from "../Components/itemCard.js";
var itemJson = require('./demoItems.json')

export default function DemoItems(props){
  let itemsInCode = itemJson[props.zipCode];
  let keyArray = Object.keys(itemJson[props.zipCode]);
  console.log(Object.entries(itemsInCode))
  let itemString = "";
  for(const [key,value] of Object.entries(itemsInCode)){
    console.log("key:"+ key);
    React.createElement(ItemCard,{price:value.price})
    console.log(key);
    console.log(value.price);
  }



  return(
    <View>
    {
      keyArray.map((key)=>{
        console.log("Item:"+ itemsInCode[key].item);
        return(
          <Image source={{uri:itemsInCode[key].src}}/>
          <ItemCard key={itemsInCode[key].item} item={itemsInCode[key].item} seller={key} price={itemsInCode[key].price} source={itemsInCode[key].src}/>
        )
      })
    }




    </View>
  );
}
function IndividualItem(props){
  return(
    <View>
    <ItemCard price={props.price}/>
    </View>
  );
}
