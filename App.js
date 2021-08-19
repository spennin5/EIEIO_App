import 'react-native-gesture-handler';//must be at very top
import * as React from 'react';
import {useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MapView from 'react-native-maps';
import MappingComponent from './Components/mapComponent.js';
import ItemCard from './Components/itemCard.js';
import LoginPage from './Pages/Login.js';
import SignUpPage from './Pages/SignUp.js';
import SellerHomePage from './Pages/SellerHome.js';
import BuyerHomePage from './Pages/BuyerHome.js';
import NewItemPage from './Pages/NewItem.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './Components/Context.js';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  if(isLoggedIn){
    if(isSeller){
      return(
        <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name = "SellerHome" component = {SellerHomePage}/>
                <Stack.Screen name = "NewItem" component = {NewItemPage}/>
              </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
      );
    }
    if(!isSeller){
      return(
        <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name = "BuyerHome" component = {BuyerHomePage}/>

              </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
      );
    }
  }
  if(!isLoggedIn){
    return(
      <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name = "SignUp" component = {SignUpPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>

    );
  }

}
