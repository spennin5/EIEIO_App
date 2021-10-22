/*
Task: This file allows sellers to create new objects for sale
Parameters: 'navigation' allows for navigation using navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {AuthContext,UserContext, CartContext} from '../Components/Context.js';

import {ItemForSale} from '../Components/DataConnector.js';
//import SelectPhoto from '../Components/selectPhotoComponent.js';
import TopBar from '../Components/topBar.js';
export default function Home({navigation}){
  const [newItemName,setNewItemName] = React.useState('')
  const [newItemPrice,setNewItemPrice] = React.useState(0)
  const [user,setUser] = React.useContext(UserContext);
  let [selectedImage, setSelectedImage] = React.useState(null);
  return(
    <View style={styles.container}>
    <TopBar/>

    <View style={styles.inputContainer}>
      <Text style={styles.headingText}>Add a New Item</Text>
      <Text style={styles.helperText}>Enter information about an item that you would like to sell.</Text>
      <Text style={styles.label}>Item Name</Text>
      <TextInput style={styles.input} onChangeText={text=>setNewItemName(text)}></TextInput>
      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} onChangeText={text=>setNewItemPrice(text)}></TextInput>
      <SelectPhoto/>
      <TouchableOpacity onPress={()=>saveNewItem()}>
        <Text>List Item</Text>
      </TouchableOpacity>
    </View>

    </View>

  );
  async function saveNewItem(){

    
    if(newItemName!='' && newItemPrice>0 && selectedImage.localUri!=null){
      let itemForSale = new ItemForSale(newItemName,newItemPrice,selectedImage.localUri,user.name)
      await itemForSale.saveItem();
      navigation.navigate('SellerHome')
    }

  }
  function SelectPhoto(){


    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }

      setSelectedImage({ localUri: pickerResult.uri });
    };

    let clearImageAsync = async () => {
      setSelectedImage(null);
    };

    if (selectedImage !== null) {
      return (
        <View >
          <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
          <TouchableOpacity onPress={clearImageAsync} style={styles.button}>
            <Text style={styles.buttonText}>Clear Image</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.photoSelectorContainer}>
        {/* <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} /> */}


        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a Photo of Your Item</Text>
        </TouchableOpacity>
      </View>
      //<React.Fragment>
        //<MappingComponent/>


      //</React.Fragment>
    );
  }
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
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderRadius: 25
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#CF0202',
    padding: 20,
    borderRadius: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
