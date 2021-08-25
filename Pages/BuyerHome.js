/*
Task: This file is the main home page for buyer profiles. It displays items for sale in their area
Parameters: 'navigation' allows for page navigation within the navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
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

    </View>
  );
}
