/*
Task: This file allows users to create new profiles and then those profiles are saved.
Parameters: 'navigation' allows page navigation via the navigation tree
Error Handling: This file contains checks for password matching and password length requirements
Author: Sam Pennington
*/
import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {User} from '../Components/DataConnector.js';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
export default function SignUp({navigation}){
  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passMatch,setPassMatch] = React.useState(false);
  const [selectedUserType, setSelectedUserType] = useState('Buyer');
  function ValidatePassMatch(){
    const pass1 = password;
    const pass2 = confirmPassword;
    const match = pass1 === pass2;
    if(match){
      if(pass1.length > 0){
        //Set up and save new user
        let user = new User(name,username,password,email,zipcode,selectedUserType);
        user.saveUser();
        user.printUser();
        //Return to login page
        navigation.navigate('Login')
      }
      //Error check
      else{
        alert('Password Too Short')
      }
    }
    //Error check
    else{
      alert('Passwords Dont Match')
    }
  }
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../Resources/tomatoes-2.jpeg")} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView style={{flex: 1}} enabled={true}>
      <ScrollView style={styles.inner}>

      <Text style={styles.fontColor}>Name: </Text>
      <View style={styles.input}>
        <TextInput color="#FFF" onChangeText={text=>setName(text)}/>
      </View>

      <Text style={styles.fontColor}>Username: </Text>
      <View style={styles.input}>
        <TextInput color="#FFF" onChangeText={text=>setUsername(text)}/>
      </View>

      <Text style={styles.fontColor}>Password: </Text>
      <View style={styles.input}>
        <TextInput color="#FFF" secureTextEntry={true} onChangeText={text=>setPassword(text)} />
      </View>

      <Text style={styles.fontColor}>Confirm Password: </Text>
      <View style={styles.input}>
        <TextInput color="#FFF" secureTextEntry={true}  onChangeText={text=>setConfirmPassword(text)} />
      </View>

      <Text style={styles.fontColor}>Email: </Text>
      <View style={styles.input}>
        <TextInput color="#FFF" onChangeText={text=>setEmail(text)}/>
      </View>

      <Text style={styles.fontColor}>Zip Code: </Text>
      <View style={styles.input}>
        <TextInput color="#FFF" onChangeText={text=>setZipcode(text)}/>
      </View>

      <Text style={styles.fontColor}>Profile Type: </Text>
      <View style={styles.pickerView}>
      <Picker style={styles.picker} selectedValue={selectedUserType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedUserType(itemValue)}>
          <Picker.Item style={styles.pickerItems} label="Buyer" value="buyer" />
          <Picker.Item style={styles.pickerItems} label="Seller" value="seller" />
      </Picker>
      </View>
      <View style={styles.submitButton}>
      <Button color="#CF0202" title="Submit" onPress = {()=>ValidatePassMatch()}/>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.9
  },

  inner:{
    backgroundColor:'rgba(0, 0, 0, 0.85)',
    marginRight: 50,
    marginLeft: 50,
    paddingTop: 20,
    borderRadius: 20,
  },

  fontColor:{
    color: 'white',
    paddingLeft: 20
  },

  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20
  },

  picker:{
    color: 'white',
    marginLeft: 15,
    marginRight: 20,
    backgroundColor: 'transparent'
  },

  pickerView: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },

  submitButton:{
    padding: 20,
  }
})
