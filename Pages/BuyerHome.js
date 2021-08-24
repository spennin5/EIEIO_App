import * as React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {AuthContext} from '../Components/Context.js';
import TopBar from '../Components/topBar.js';
import ItemCard from '../Components/itemCard';
import DemoItems from '../ForDemo/demoItemsFunctions.js';
import {useContext} from 'react';


export default function BuyerHome({navigation}){
  return(
    <View>
    <TopBar/>
    <DemoItems zipCode="30602"/>
    <ItemCard sellerName="Judy" item="Tomato"/>
    </View>
  );
}
