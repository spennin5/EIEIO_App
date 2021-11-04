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

      <View style={styles.inner}>
        <Text style={styles.fontColor}>Username: </Text>
        <View style={styles.input}>
          <TextInput autoCapitalize='none' color="#FFF" onChangeText={text=>setUsername(text)}/>
        </View>
        
        <Text style={styles.fontColor}>Password: </Text>
        <View style={styles.input}>
          <TextInput secureTextEntry={true}  autoCapitalize='none' color="#FFF" onChangeText={text=>setPassword(text)} secureTextEntity={true}/>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => validateUser()}>
            <Button title = "Login" color="#3c8024" onPress={() => validateUser()}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.redButton]} onPress={() => navigation.navigate('SignUp')}>
            <Button title = "Sign Up" color="#CF0202" onPress={() => navigation.navigate('SignUp')}/>
          </TouchableOpacity>
        </View>
        
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
    opacity: 0.9
  },

  fontColor:{
    color: 'white',
    paddingLeft: 20
  },

  inner:{
    backgroundColor:'rgba(0, 0, 0, 0.85)',
    marginBottom: 100,
    marginRight: 50,
    marginLeft: 50,
    paddingTop: 50,
    borderRadius: 20
  },

  buttonContainer:{
    flexDirection: "row",
    alignSelf: 'center',
    paddingBottom: 20
  },

  button:{
    backgroundColor: 'rgba(60, 128, 36, 0.5)',
    alignSelf:'center',
    margin: 5,
  },

  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 35
  },
  
  msg:{
    fontStyle:"italic",
    marginLeft: 5,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  }
});

export default LoginPage;
