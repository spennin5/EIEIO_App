import * as React from 'react';
import {AuthContext} from '../Components/Context.js';
import {useContext} from 'react';
import {Button} from 'react-native';
export default function topBar(){
  //const [isLoggedIn,setIsLoggedIn] = useContext(AuthContext);
  const { isLoggedIn, isSeller } = React.useContext(AuthContext);
  const [isLoggedInVal,setIsLoggedInVal] = isLoggedIn;
  const [isSellerVal,setIsSellerVal] = isSeller;
  function logout(){

    setIsLoggedInVal(false);
  }
  return(
    <Button title= "Log Out" onPress={()=>logout()}/>
  );
}
