/*
Task: Main page for non-logged-in users. Allows users to log in or go to sign up page
Parameters: 'navigation' allows for navigation using navigation tree
Error Handling: todo
Author: Sam Pennington
*/
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';
import {AuthContext, UserContext} from '../Components/Context.js';
import {useContext} from 'react';
import {authenticateUsers} from '../Components/DataConnector.js';

function LoginPage({navigation}){
  //Context is used to pass variables down to other pages and back up.
  //In this case, AuthContext passes between App.js and Login.js
  const { isLoggedIn, isSeller } = React.useContext(AuthContext);
  const [isLoggedInVal,setIsLoggedInVal] = isLoggedIn;
  //Check if user is buyer or seller
  const [isSellerVal,setIsSellerVal] = isSeller;
  //Context variables from UserContext
  const [user,setUser] = React.useContext(UserContext);
  //Used for validtion
  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userMsg,setUserMsg] = React.useState('');
  async function validateUser(){
    let userInfo = await authenticateUsers(username,password);
    console.log(userInfo)

    if(userInfo[0]){
      setIsLoggedInVal('true');
      setUser(userInfo[1]);
      if(userInfo[1].type=="seller"){
        setIsSellerVal(true);
      }
      else{
        setIsSellerVal(false);
      }
    }
    else{
      //Display incorrect user/password message
      setUserMsg("Incorrect Username or Password");
    }
  }
  return(
    <View>
      <Text>Username: </Text>
      <TextInput autoCapitalize='none' onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput autoCapitalize='none' onChangeText={text=>setPassword(text)} secureTextEntity={true}/>
      <Button title="Submit" onPress={() => validateUser()}/>
      <Button title = "Sign Up" onPress={() => navigation.navigate('SignUp')}/>
      <Text>{userMsg}</Text>
    </View>
  );
}

export default LoginPage;
