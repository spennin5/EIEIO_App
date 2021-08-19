import * as React from 'react';
import {AuthContext} from '../Components/Context.js';
import {useContext} from 'react';
import {Button} from 'react-native';
export default function topBar(){
  const [isLoggedIn,setIsLoggedIn] = useContext(AuthContext);
  function logout(){

    setIsLoggedIn(false);
  }
  return(
    <Button title= "Log Out" onPress={()=>logout()}/>
  );
}
