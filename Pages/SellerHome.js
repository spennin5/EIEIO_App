/*
Task: This file acts as the home page for sellers to create new items and do other sellers
alligned tasks
Parameters: 'navigation' allows for navigation using navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../Components/Context.js';
import TopBar from '../Components/topBar.js';
import {useContext} from 'react';


export default function SellerHome({navigation}){
  return(
    <View>
      <TopBar/>
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
  }
});