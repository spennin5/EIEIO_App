/*
Task: Navigational element holding cross-page elements
Parameters: N/A
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import {AuthContext} from '../Components/Context.js';
import {useContext} from 'react';
import {Button, StyleSheet,TouchableOpacity,Text,View} from 'react-native';
/*
This component should be used on the top of every page once a user is logged in.
It holds app-wide functionality such as "Logout"
 */
function TopBar(){
  //Used to set a user's state to be not logged in
  const { isLoggedIn, isSeller } = React.useContext(AuthContext);
  const [isLoggedInVal,setIsLoggedInVal] = isLoggedIn;
  const [isSellerVal,setIsSellerVal] = isSeller;
  function logout(){
    setIsLoggedInVal(false);
  }
  return(
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchable} onPress={()=>logout()}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    justifyContent:"center",
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  touchable:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    alignSelf:'flex-end',
    margin:5

  },
  view:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  }
});
export default TopBar;
