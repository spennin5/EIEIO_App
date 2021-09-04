/*
Task: Main page for non-logged-in users. Allows users to log in or go to sign up page
Parameters: 'navigation' allows for navigation using navigation tree
Error Handling: todo
Author: Sam Pennington
*/
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
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
  const [error,setError] = React.useState(false);
  async function validateUser(){
    let userInfo = await authenticateUsers(username,password);
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
      setError(true)
    }
  }
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../Resources/tomatoes-2.jpeg")} resizeMode="cover" style={styles.image}>

      <Text style={[styles.fontColor, styles.logo]}>e-i-e-i-o</Text>

      <View style={styles.inner}>
        <Text style={styles.fontColor}>Username: </Text>
        <View style={styles.input}>
          <TextInput autoCapitalize='none' onChangeText={text=>setUsername(text)}/>
        </View>
        
        <Text style={styles.fontColor}>Password: </Text>
        <View style={styles.input}>
          <TextInput autoCapitalize='none' onChangeText={text=>setPassword(text)} secureTextEntity={true}/>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => validateUser()}>
          <Button title = "Submit" onPress={() => validateUser()}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Button title = "Sign Up" onPress={() => navigation.navigate('SignUp')}/>
        </TouchableOpacity>
        
        {error ? <Text style={styles.msg}>{userMsg}</Text>:null}

        </View>
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
    opacity: 0.8
  },

  logo:{
    marginBottom: 100,
    textAlign: 'center',
    fontSize: 30,
    //fontFamily: 'Brush Script MT'
  },

  fontColor:{
    color: 'white'
  },

  inner:{
    // backgroundColor:'white'
    marginBottom: 250
  },
  button:{
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    alignSelf:'center',
    margin: 5,
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  msg:{
    fontStyle:"italic",
    marginLeft: 5
  }
});

export default LoginPage;
