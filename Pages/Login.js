import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';
import {AuthContext, UserContext} from '../Components/Context.js';
import {useContext} from 'react';
import {authenticateUsers} from '../Components/DataConnector.js';

function LoginPage({navigation}){
  const { isLoggedIn, isSeller } = React.useContext(AuthContext);
  const [isLoggedInVal,setIsLoggedInVal] = isLoggedIn;
  const [isSellerVal,setIsSellerVal] = isSeller;

  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  function validateUser(){
    authenticateUsers();
    if(username=="buyer"&&password=="buyer"){
      setIsSellerVal(false);
      //In the future we need to validate that the username and password are valid against a DB
      setIsLoggedInVal('true');
      navigation.navigate("Home");
    }
    if(username=="seller"&&password=="seller"){
      setIsSellerVal(true);
      //In the future we need to validate that the username and password are valid against a DB
      setIsLoggedInVal('true');
      navigation.navigate("Home");
    }

  }
  return(
    <View>
      <Text>Username: </Text>
      <TextInput autoCapitalize='none' onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput autoCapitalize='none' onChangeText={text=>setPassword(text)} secureTextEntity={true}/>
      <Text>'Your Username is {username} and your Password is {password}'</Text>
      <Button title="Submit" onPress={() => validateUser()}/>
      <Button title = "Sign Up" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  );
}

export default LoginPage;
