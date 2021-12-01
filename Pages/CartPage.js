import * as React from 'react';
import {Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {CartContext} from '../Components/Context.js'
import {Transaction} from './Transaction.js'
import TopBar from '../Components/topBar.js';
export default function CartPage(props){
  const [popcart,setCart] = React.useContext(CartContext);
  if(popcart==null || Object.keys(popcart).length == 0){
    return(
      <TouchableOpacity onPress={()=>props.navigation.navigate('BuyerHome')}>
        <Text>Sorry! Your Cart is Empty!</Text>
        <Text>Please Add Items to Your Cart to Continue</Text>
      </TouchableOpacity>
    )
  }
  else{
    let totalPrice = 0;
    let keyArray = Object.keys(popcart);
    var tableHeaders = ['Item','Seller','Price'];
    var tableFooter = ["","Total"]
    var tableData = []

    for (const [key, value] of Object.entries(popcart)) {
      console.log(`${key}: ${value.seller}`);
      tableData.push([value.item,value.seller,value.price])
      console.log(value.price)
      console.log((value.price).substring(1))
      totalPrice = totalPrice + parseInt((value.price).substring(1))
    }
    tableFooter.push("$"+totalPrice)

    return(

      <View >
        <TopBar/>
          <Table>
            <Row style={styles.tableHeaderStyle} textStyle={styles.headerText} data={tableHeaders} />
            <Rows style={styles.tableDataStyle} textStyle={styles.lineItemText} data={tableData} />
            <Row style={styles.tableFooterStyle} textStyle={styles.totalText} data={tableFooter} />
          </Table>
          <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('TransactionPage',{total:totalPrice})}}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  tableHeaderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    paddingTop: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  tableDataStyle: {
    paddingBottom: 10,
    marginTop: 10,
    paddingTop: 5
  },

  lineItemText: {
    textAlign: 'center',
    fontSize: 15,
    fontStyle: 'italic'
  },

  tableFooterStyle: {
    paddingTop: 10
  },

  totalText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#3c8024',
    padding: 10,
    borderRadius: 5,
    // marginRight: 'auto',
    // marginLeft: 'auto',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },

  buttonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center'
  }
});
