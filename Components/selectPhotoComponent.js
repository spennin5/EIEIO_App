/*
Task: This file allows sellers to pick images of their items from device storage
Parameters: N/A
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SelectPhoto(){
  let [selectedImage, setSelectedImage] = React.useState(null);

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
