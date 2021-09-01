import * as React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Modal,Button,TextInput } from 'react-native';

export default function TransactionPage(props){

  return(
    <View>
      <Text>You're buying {props.item} from {props.seller} for {props.price}!</Text>
      <Text>Confirmation and pick up details will be sent upon transaction completion</Text>
      <Text>Card Number</Text>
      <TextInput placeholder='Credit/Debit Card Number'></TextInput>
      <Text>CVV</Text>
      <TextInput placeholder='CVV'></TextInput>
      <Text>Billing Address</Text>
      <TextInput placeholder='Billing Address'></TextInput>
      <Text>City</Text>
      <TextInput placeholder='City'></TextInput>
      <Text>State</Text>
      <TextInput placeholder='GA'></TextInput>
      <Text>Confirmation Email Address</Text>
      <TextInput placeholder='Email Address'></TextInput>
    </View>
  );
}
