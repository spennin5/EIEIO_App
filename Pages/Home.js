import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';

export default function Home({navigation}){

  return(
    <Button title="New Item" onPress={()=>navigation.navigate("NewItem")}/>
  );
}
