/*
Task: This file allows sellers to create new objects for sale
Parameters: 'navigation' allows for navigation using navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import SelectPhoto from '../Components/selectPhotoComponent.js';
import TopBar from '../Components/topBar.js';
export default function Home({navigation}){

  return(
    <View style={styles.container}>
    <TopBar/>

    <View style={styles.inputContainer}>

    <Text style={styles.headingText}>Add a New Item</Text>
    <Text style={styles.helperText}>Enter information about an item that you would like to sell.</Text>

        <Text style={styles.label}>Item Name</Text>
        <TextInput style={styles.input}></TextInput>

      
        <Text style={styles.label}>Price</Text>
        <TextInput style={styles.input}></TextInput>

      <SelectPhoto/>
    </View>
    
    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    marginLeft: 20,
    marginRight: 20
  },

  inputContainer:{
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    borderColor: 'gray',
  },

  headingText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },

  helperText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 10
  },

  label:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },

  input:{
    borderWidth: 1,
    marginBottom: 10,
    borderColor: 'gray',
    fontSize: 17,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
});