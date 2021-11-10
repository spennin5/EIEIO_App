import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button, Touchable } from 'react-native';
import {CartContext} from '../Components/Context.js';
var itemJson = require('../ForDemo/demoItems.json')
import TopBar from '../Components/topBar.js';

export default function OrderConfirm({navigation}){
  const [cart,setCart] = React.useContext(CartContext);
  function returnHome(){
    //TODO: delete items in cart from database. No database currently exists
    //Reset cart to empty
    setCart(null);
    //Return to home screen
    navigation.navigate('BuyerHome')
  }
  return(
    <View>
      <TopBar/>
      <Text style={styles.confirmationText}>Thanks for Your Order!</Text>
      <Text style={styles.button} onPress={()=>returnHome()}>Return Home</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  confirmationText: {
    fontSize: 25,
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#3c8024',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    color: 'white',
    textAlign: 'center',
     marginRight: 'auto',
    marginLeft: 'auto',
  }
  
});