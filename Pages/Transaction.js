import * as React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function TransactionPage(props){

  return(
    <KeyboardAvoidingView enabled={true}>
      <ScrollView style={styles.modal}>
        <Text style={styles.verifyItemsText}>You're buying {props.item} from {props.seller} for {props.price}!</Text>
        <Text style={styles.confirmationText}>Confirmation and pick up details will be sent upon transaction completion.</Text>
        <View style={styles.transactionForm}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput style={styles.input} placeholder='Credit/Debit Card Number' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>CVV:</Text>
          <TextInput style={styles.input} placeholder='CVV' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>Billing Address:</Text>
          <TextInput style={styles.input} placeholder='Billing Address' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>City:</Text>
          <TextInput style={styles.input} placeholder='City' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>State:</Text>
          <TextInput style={styles.input} placeholder='GA' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>Confirmation Email Address:</Text>
          <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='#727274'></TextInput>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  modal:{
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },

  verifyItemsText: {
    marginBottom: 5,
    fontWeight: 'bold'
  },

  confirmationText:{
    marginBottom: 5,
    fontStyle: 'italic'
  },

  transactionForm: {
    marginBottom: 10
  },

  label:{
    fontSize: 15,
    fontWeight: 'bold'
  },

  input:{
    paddingTop: 5,
    borderBottomWidth: 1,
    color: 'black',
    marginBottom: 5
  },
});