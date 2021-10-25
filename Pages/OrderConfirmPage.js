import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button, Touchable } from 'react-native';

export default function OrderConfirm({navigation}){
  return(
    <View>
      <Text>Thanks for Your Order!</Text>
      <Text onPress={()=>navigation.navigate('BuyerHome')}>Return Home</Text>
    </View>
  )
}
