/*
Task: This file defines the ItemCard component
Parameters: props holds the passed in sellerName, item, and price to be displayed
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button, Touchable } from 'react-native';
//const assets = require('../ForDemo/assets.js');
import {AssetObject as assets} from '../Components/DataConnector.js';
import TransactionPage from '../Pages/Transaction.js';
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
  function purchase(cardNum, cvv, expiration){
    return;
  }
  return(
    <View>
      <View style={[styles.container,{opacity:opacityVal}]}>
        <Image source={assets[props.source]} style={styles.image} />
          <View style={styles.textBox}>

            <Text style={styles.itemText}>{props.item}</Text>
            <Text style={styles.sellerText}>Sold by {props.sellerName}</Text>
            <Text style={styles.priceText}>{props.price}</Text>
          </View>

          {/* 
          Changed the Buy Now buttons to actual buttons because as text, they aren't as accessible when using Android Talkback or other assistive tech
          */}
          <View style={styles.button}>
            <TouchableOpacity>
              <Button title="Buy Now" color="#3c8024"  onPress={()=>{openModal()}}></Button>
            </TouchableOpacity>
          </View>
      </View>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={()=>{closeModal()}}>
          <View style={styles.modalFill}/>
          <View style={styles.modalContent}>
            <TransactionPage style={styles.transactionText} item={props.item} seller={props.sellerName} price={props.price}/>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.transactionButtons}>
                  <Button title="Cancel Transaction" color="#CF0202" onPress={()=>{closeModal()}}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.transactionButtons} >
                <Button title="Submit Transaction" color="#3c8024" onPress={()=>{purchase()}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.modalFill}/>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox:{
    margin: 5,
    marginLeft: 4,
    flex:3
  },
  container:{
    flexDirection:'row',
    borderBottomColor: '#f7f7f7',
    borderWidth: .5,
    backgroundColor: '#FFF',
    opacity:opacityState
  },
  button:{
    marginTop: 20,
    marginRight: 10
  },
  bText:{
    alignSelf:'center',
    alignContent:'center'
  },
  image:{
    height: 'auto',
    width:50,
    flex: 1,
  },

  itemText:{
    fontSize: 20,
    color: '#CF0202'
  },

  sellerText:{
    fontStyle: 'italic'
  },

  priceText:{
    fontSize: 17
  },

  modalFill:{
    flex:1
  },
  modalContent:{
    borderColor: '#3c8024',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor:'white',
    paddingBottom: 20,
  },

  buttonContainer:{
    flexDirection: 'row'
  },

  transactionButtons:{
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
export default ItemCard;
