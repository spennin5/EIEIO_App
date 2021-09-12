import * as React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput } from 'react-native';

export default function TransactionPage(props){

  return(
    <View style={styles.modal}>
      <Text>You're buying {props.item} from {props.seller} for {props.price}!</Text>
      <Text>Confirmation and pick up details will be sent upon transaction completion</Text>
      <Text style={styles.label}>Card Number</Text>
      <TextInput placeholder='Credit/Debit Card Number'></TextInput>
      <Text style={styles.label}>CVV</Text>
      <TextInput placeholder='CVV'></TextInput>
      <Text style={styles.label}>Billing Address</Text>
      <TextInput placeholder='Billing Address'></TextInput>
      <Text style={styles.label}>City</Text>
      <TextInput placeholder='City'></TextInput>
      <Text style={styles.label}>State</Text>
      <TextInput placeholder='GA'></TextInput>
      <Text style={styles.label}>Confirmation Email Address</Text>
      <TextInput placeholder='Email Address'></TextInput>
    </View>
  );
}


const styles = StyleSheet.create({
  modal:{
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },

  label:{

  },

  input:{
    
  },
});