import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';
import SelectPhoto from '../Components/selectPhotoComponent.js';
import TopBar from '../Components/topBar.js';
export default function Home({navigation}){

  return(
    <View>
    <TopBar/>
    <Text>Item Name</Text>
    <TextInput></TextInput>
    <Text>Price</Text>
    <TextInput></TextInput>
    <SelectPhoto/>
    </View>

  );
}
