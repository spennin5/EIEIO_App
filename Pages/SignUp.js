import * as React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react'
export default function SignUp({navigation}){
  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passMatch,setPassMatch] = React.useState(false);
  function ValidatePassMatch(){
    const pass1 = password;
    const pass2 = confirmPassword;
    const match = pass1 === pass2;
    if(match){
      if(pass1.length > 4){
        navigation.navigate('Login')
      }
      else{
        alert('password too short')
      }
    }
    else{
      alert('Passwords Dont Match')
    }
  }
  return(
    <View>
      <Text>Username: </Text>
      <TextInput onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput onChangeText={text=>setPassword(text)} secureTextEntity={true} multiline={false}/>
      <Text>Confirm Password: </Text>
      <TextInput onChangeText={text=>setConfirmPassword(text)} secureTextEntity={true}/>
      <Button title="Submit"
      onPress = {()=>ValidatePassMatch()}
      />

    </View>
  );
}
