import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';
import {AuthContext} from '../Components/Context.js';
import TopBar from '../Components/topBar.js';
import {useContext} from 'react';


export default function Home({navigation}){
  return(
    <View>
    <TopBar/>
    <Button title="New Item" onPress={()=>navigation.navigate("NewItem")}/>
    </View>
  );
}
