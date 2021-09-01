/*
Task: This file defines the ItemCard component
Parameters: props holds the passed in sellerName, item, and price to be displayed
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button } from 'react-native';
//const assets = require('../ForDemo/assets.js');
import {AssetObject as assets} from '../Components/DataConnector.js';
import TransactionModal from '../Pages/Transaction.js';
var opacityState = .8;
//Reusable component holding information about items for sale.
function ItemCard(props) {
  const [modalVisible,setModalVisible] = React.useState(false);
  const [opacityVal,setOpacityVal] = React.useState(.9);
  function openModal(){
    setModalVisible(true);
    setOpacityVal(.1);
  }
  function closeModal(){
    setModalVisible(!modalVisible)
    setOpacityVal(1);
  }
  return(
    <View>
      <View style={[styles.container,{opacity:opacityVal}]}>
        <Image source={assets[props.source]} style={styles.image} />
          <View style={styles.textBox}>

            <Text>Seller: {props.sellerName}</Text>
            <Text>Item: {props.item}</Text>
            <Text>Price: {props.price}</Text>
          </View>
          <TouchableOpacity onPress={()=>{openModal()}}>
            <View style={styles.button}>
              <Text></Text>
                <Text style={styles.bText}>Buy Now</Text>
            </View>
          </TouchableOpacity>
      </View>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={()=>{closeModal()}}>
          <View style={styles.modalFill}/>
          <View style={styles.modalContent}>
            <Button title="Close" onPress={()=>{closeModal()}}/>
          </View>
          <View style={styles.modalFill}/>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox:{
    margin: 2,
    marginLeft: 4,
    flex:3
  },
  container:{
    flexDirection:'row',
    margin:2,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
    opacity:opacityState
  },
  button:{
    flex:1,
    backgroundColor: '#00AB66',
  },
  bText:{
    alignSelf:'center',
    alignContent:'center'
  },
  image:{
    height:70,
    width:50,
    flex: 1,
    borderColor:'black',
    borderWidth:1
  },
  modalFill:{
    flex:1,

  },
  modalContent:{
    justifyContent:'center',
    backgroundColor:'grey',
    
    flex:6,
    marginTop:'auto'
  }
});
export default ItemCard;
