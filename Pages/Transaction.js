import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button } from 'react-native';

export default function TransactionModal(props){
  const [modalVisible,setModalVisible] = React.useState(props.modalVisible);
  return(
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={()=>{setModalVisible(!modalVisible)}}>
      <Button title="X" onPress={()=>{setModalVisible(!modalVisible)}}/>

    </Modal>
  );
}
