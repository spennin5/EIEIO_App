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
          <ItemCard item={itemsInCode[key].item} seller={key} price={itemsInCode[key].price}/>
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
