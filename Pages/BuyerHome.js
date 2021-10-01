/*
Task: This file is the main home page for buyer profiles. It displays items for sale in their area
Parameters: 'navigation' allows for page navigation within the navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { View, Text, TextInput, Button,Modal, TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';
import {AuthContext,UserContext, CartContext} from '../Components/Context.js';
import TopBar from '../Components/topBar.js';
import ItemCard from '../Components/itemCard';
import DemoItems from '../ForDemo/demoItemsFunctions.js';
import MapPage from "./MapPage.js";
import {Badge, Icon, withBadge} from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import {useContext} from 'react';


export default function BuyerHome({navigation}){
  //Context variables from UserContext
  const [user,setUser] = React.useContext(UserContext);
  const [searchZip, setSearchZip] = React.useState('30602');
  const [searchBoxVal, setSearchBoxVal] = React.useState('');
  const [modalVisible,setModalVisible] = React.useState(false);
  let [cart,setCart] = React.useContext(CartContext);
  let [count,setCount] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if(cart!=null){
        setCount(cart.length)
      }
      else{
        count = 0
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let BadgedIcon = withBadge(count)(Icon)



  function updateSearchZip(zip){
    setSearchBoxVal(zip);
    if(zip.length == 5){
      setSearchZip(zip);
    }
  }
  function toCart(){
    if(cart!=null){
      navigation.navigate('CartPage')
    }

  }
  return(
    <View style={styles.view}>
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.button}>
          <Button title="Map View" color="#CF0202" onPress={()=>{setModalVisible(true)}}/>
        </TouchableOpacity>

        <TopBar/>
      </View>
      <View>
        <SearchBar style={styles.searchBar} placeholder="Find Produce in Your Zip Code" placeholderTextColor="#FFF" onChangeText={updateSearchZip} value={searchBoxVal}/>
        <DemoItems zipCode={searchZip}/>


      </View>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={()=>{setModalVisible(!modalVisible)}}>
          <View style={styles.mapExitButton}>
            <Button title="Exit Map" color="#CF0202" onPress={()=>{setModalVisible(!modalVisible)}}/>
          </View>
          <MapPage zipCode={searchZip}/>
        </Modal>
      </View>
      <View style={styles.cartView}>
        <TouchableOpacity>
          <BadgedIcon type="ionicon" name="cart-outline" onPress={()=>toCart()}/>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles=StyleSheet.create({
  view:{
    backgroundColor:'#FFF',

  },
  cartView:{
    alignSelf:'flex-end',
    padding: 50
  },
  container:{
    flex:1
  },
  topRow:{
    height: 50,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  button:{
    alignItems:'flex-start',
    justifyContent:'center',
    flex:1
  },

  searchBar:{
    color:'white'
  },

  modal:{
    flex:1
  },

  mapExitButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
