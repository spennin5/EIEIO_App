/*
Task: Navigational element holding cross-page elements
Parameters: N/A
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import {AuthContext} from '../Components/Context.js';
import {useContext} from 'react';
import {Button} from 'react-native';
/*
This component should be used on the top of every page once a user is logged in.
It holds app-wide functionality such as "Logout"
 */
export default function topBar(){
  //Used to set a user's state to be not logged in
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
