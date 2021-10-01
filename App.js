import 'react-native-gesture-handler';//must be at very top
import * as React from 'react';
import {useEffect, useState} from 'react'
//import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import * as ImagePicker from 'expo-image-picker';
//import MapView from 'react-native-maps';
//import MappingComponent from './Components/mapComponent.js';
//import ItemCard from './Components/itemCard.js';
import LoginPage from './Pages/Login.js';
import SignUpPage from './Pages/SignUp.js';
import SellerHomePage from './Pages/SellerHome.js';
import BuyerHomePage from './Pages/BuyerHome.js';
import NewItemPage from './Pages/NewItem.js';
import CartPage from './Pages/CartPage.js';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext,UserContext,CartContext} from './Components/Context.js';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  if(isLoggedIn){
    if(isSeller){
      return(
        <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
          <UserContext.Provider value = {[user,setUser]}>

            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name = "SellerHome" component = {SellerHomePage}/>
                <Stack.Screen name = "NewItem" component = {NewItemPage}/>
              </Stack.Navigator>
            </NavigationContainer>
          </UserContext.Provider>
        </AuthContext.Provider>
      );
    }
    if(!isSeller){
      return(
        <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
          <UserContext.Provider value = {[user,setUser]}>
            <CartContext.Provider value = {[cart,setCart]}>
              <NavigationContainer>
              
                <Stack.Navigator>
                  <Stack.Screen name = "BuyerHome" component = {BuyerHomePage}/>
                  <Stack.Screen name = "CartPage" component = {CartPage}/>
                </Stack.Navigator>

              </NavigationContainer>
            </CartContext.Provider>
          </UserContext.Provider>
        </AuthContext.Provider>
      );
    }
  }
  if(!isLoggedIn){
    return(
      <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
        <UserContext.Provider value = {[user,setUser]}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginPage}/>
              <Stack.Screen name = "SignUp" component = {SignUpPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      </AuthContext.Provider>

    );
  }

}
