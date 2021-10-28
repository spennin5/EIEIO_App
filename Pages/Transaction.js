import * as React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import TopBar from '../Components/topBar.js';
export default function TransactionPage({navigation,route,props}){
  const [ccNum, setCCNum] = React.useState();
  const [ccv, setCcv] = React.useState(null);
  const [billingAddress, setBillingAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [email, setEmail] = React.useState("");

  function validatePayment(){
    console.log(String(ccNum).length)
    if(!(String(ccNum).length==16)){
      alert("Please Fill in Credit Card")
    }
    else if(!(String(ccv).length==3)){
      alert("Please Fill in CVV")
    }
    else if(billingAddress==""){
      alert("Please Fill in Billing Address")
    }
    else if(city==""){
      alert("Please Fill in City")
    }
    else if(state==""){
      alert("Please Fill in State")
    }
    else if(email==""){
      alert("Please Fill in Email")
    }
    else{

      navigation.navigate("OrderConfirm")
    }
  }
  return(
    <KeyboardAvoidingView enabled={true}>
      <TopBar/>
      <ScrollView style={styles.modal}>
        <Text style={styles.verifyItemsText}>Your total is ${route.params.total}!</Text>
        <Text style={styles.confirmationText}>Confirmation and pick up details will be sent upon transaction completion.</Text>
        <View style={styles.transactionForm}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput onChangeText={text=>setCCNum(text)} style={styles.input} placeholder='Credit/Debit Card Number' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>CVV:</Text>
          <TextInput onChangeText={text=>setCcv(text)} style={styles.input} placeholder='CVV' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>Billing Address:</Text>
          <TextInput onChangeText={text=>setBillingAddress(text)} style={styles.input} placeholder='Billing Address' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>City:</Text>
          <TextInput onChangeText={text=>setCity(text)} style={styles.input} placeholder='City' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>State:</Text>
          <TextInput onChangeText={text=>setState(text)} style={styles.input} placeholder='GA' placeholderTextColor='#727274'></TextInput>
          <Text style={styles.label}>Confirmation Email Address:</Text>
          <TextInput onChangeText={text=>setEmail(text)} style={styles.input} placeholder='Email Address' placeholderTextColor='#727274'></TextInput>
          <Button title="Submit" onPress={()=>validatePayment()}>Submit!</Button>
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
