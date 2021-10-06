import * as React from 'react';
import {Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {CartContext} from '../Components/Context.js'
export default function CartPage(props){
  const [cart,setCart] = React.useContext(CartContext);
  let totalPrice = 0;
  let keyArray = Object.keys(cart);
  var tableHeaders = ['Item','Seller','Price'];
  var tableFooter = ["","Total"]
  var tableData = []
  console.log(Object.keys(cart))
  for (const [key, value] of Object.entries(cart)) {
    console.log(`${key}: ${value.seller}`);
    tableData.push([value.item,value.seller,value.price])
    console.log(value.price)
    console.log((value.price).substring(1))
    totalPrice = totalPrice + parseInt((value.price).substring(1))
  }
  tableFooter.push("$"+totalPrice)

  return(

    <View >
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={tableHeaders} />
          <Rows data={tableData} />
          <Row data={tableFooter} />
        </Table>
      </View>
    )


}
