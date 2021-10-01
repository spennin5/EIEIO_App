import * as React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {CartContext} from '../Components/Context.js'
export default function CartPage(props){
  const [cart,setCart] = React.useContext(CartContext);
  let keyArray = Object.keys(cart);
  return(
    <View>
    {
      keyArray.map((key)=>{
        return(
          <Text>{key}</Text>
        )
      })
    }
    </View>
  )

}
