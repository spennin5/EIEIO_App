/*
Task: This file allows users to create new profiles and then those profiles are saved.
Parameters: 'navigation' allows page navigation via the navigation tree
Error Handling: This file contains checks for password matching and password length requirements
Author: Sam Pennington
*/
import * as React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {User} from '../Components/DataConnector.js';
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
    <View>
      <Text>Name: </Text>
      <TextInput onChangeText={text=>setName(text)}/>
      <Text>Username: </Text>
      <TextInput onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput onChangeText={text=>setPassword(text)} secureTextEntity={true}/>
      <Text>Confirm Password: </Text>
      <TextInput onChangeText={text=>setConfirmPassword(text)} secureTextEntity={true}/>
      <Text>Email: </Text>
      <TextInput onChangeText={text=>setEmail(text)}/>
      <Text>Zip Code: </Text>
      <TextInput onChangeText={text=>setZipcode(text)}/>
      <Text>Profile Type: </Text>
      <Picker
        selectedValue={selectedUserType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedUserType(itemValue)
        }>
        <Picker.Item label="Buyer" value="buyer" />
        <Picker.Item label="Seller" value="seller" />
      </Picker>
      <Button title="Submit"
      onPress = {()=>ValidatePassMatch()}
      />
    </View>
  );
}
