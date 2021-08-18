import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';
import SelectPhoto from '../Components/selectPhotoComponent.js';
export default function Home({navigation}){

  return(
    <View>
    <Text>Item Name</Text>
    <TextInput></TextInput>
    <Text>Price</Text>
    <TextInput></TextInput>
    <SelectPhoto/>
    </View>

  );
}
