/*
Task: This file acts as the home page for sellers to create new items and do other sellers
alligned tasks
Parameters: 'navigation' allows for navigation using navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import {Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {AuthContext,UserContext} from '../Components/Context.js';
import TopBar from '../Components/topBar.js';
import {useContext} from 'react';
import ItemCard from "../Components/itemCard.js";
var fs = require('expo-file-system');

export  default function SellerHome({navigation}){
  let [itemData,setItemData] = React.useState(null)
  const [loading,setLoading] = React.useState(true)


  async function loadItems (){
    console.log("loading")
    const itemObj =  await fs.readAsStringAsync(fs.documentDirectory+'items.txt');
    setItemData(itemObj);
  };

  React.useEffect(()=>{
    
    let refresher = navigation.addListener("focus",()=>{
      loadItems();
      console.log(itemData)
      setLoading(false);
    })

  },[navigation])



  if(itemData!=null){
    console.log("Item Data: "+itemData)
    itemData = JSON.parse(itemData)
    var tableHeaders = ['Item','Seller','Price'];
    var tableData = []
    for(const [key,value] of Object.entries(itemData)){

      tableData.push([value.item,value.seller,value.price])
    }
    return(
      <View>
        <TopBar/>
        <Table>
          <Row style={styles.tableHeaderStyle} textStyle={styles.headerText} data={tableHeaders} />
          <Rows style={styles.tableDataStyle} textStyle={styles.lineItemText} data={tableData} />

        </Table>
        <View style={styles.newItemButton}>
          <Button title="New Item" color="#3c8024" onPress={()=>navigation.navigate("NewItem")}/>
        </View>
      </View>
    );
  }

  return(
    <View>
      <TopBar/>
      <Text style={styles.messageText}>You have no items for sale!</Text>
      <View style={styles.newItemButton}>
        <Button title="New Item" color="#3c8024" onPress={()=>navigation.navigate("NewItem")}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  newItemButton:{
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 20
  },

  messageText:{
    paddingBottom: 20,
    textAlign: 'center'
  },
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
});
