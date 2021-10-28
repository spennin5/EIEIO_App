import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button, Touchable } from 'react-native';
import {CartContext} from '../Components/Context.js';
var itemJson = require('../ForDemo/demoItems.json')


export default function OrderConfirm({navigation}){
  const [cart,setCart] = React.useContext(CartContext);
  function returnHome(){
    //TODO: delete items in cart from database. No database currently exists
    //Reset cart to empty
    setCart(null);
    //Return to home screen
    navigation.navigate('BuyerHome')
  }
  return(
    <View>
      <Text>Thanks for Your Order!</Text>
      <Text onPress={()=>returnHome()}>Return Home</Text>
    </View>
  )
}
