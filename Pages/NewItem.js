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
      <Text style={styles.label}>Item Name:</Text>
      <TextInput style={styles.input}></TextInput>

      <Text style={styles.label}>Price: </Text>
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
    borderColor: 'gray'
  },

  label:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },

  input:{
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 17,
    paddingLeft: 10
  },
});