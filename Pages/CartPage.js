import * as React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {CartContext} from '../Components/Context.js'
export default function CartPage(props){
  const [cart,setCart] = React.useContext(CartContext);
  return(
    <Text>{cart[0].item}</Text>
  );
}
