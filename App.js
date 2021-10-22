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
import SellerProfile from './Pages/SellerProfile.js'
import Transaction from './Pages/Transaction.js'
import ItemCard from './Components/itemCard.js'
import OrderConfirm from './Pages/OrderConfirmPage.js'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext,UserContext,CartContext} from './Components/Context.js';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  Stack.Navigator.navigationOptions = {
    headerShown:false
  }
  if(isLoggedIn){
    if(isSeller){
      return(
        <AuthContext.Provider value = {{isLoggedIn:[isLoggedIn,setIsLoggedIn],isSeller:[isSeller,setIsSeller]}}>
          <UserContext.Provider value = {[user,setUser]}>

            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen options={{title:"Home"}} name = "SellerHome" component = {SellerHomePage}/>
                <Stack.Screen options={{title:"Add New Item"}} name = "NewItem" component = {NewItemPage}/>
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
                  <Stack.Screen options={{title:"Home"}} name = "BuyerHome" component = {BuyerHomePage} />
                  <Stack.Screen name = "ItemCard" component = {ItemCard}/>
                  <Stack.Screen options={{title:""}} name = "SellerProfile" component = {SellerProfile}/>
                  <Stack.Screen options={{title:"Your Cart"}} name = "CartPage" component = {CartPage}/>
                  <Stack.Screen options={{title:"Check Out"}} name = "TransactionPage" component = {Transaction} />
                  <Stack.Screen options={{title:""}} name = "OrderConfirm" component = {OrderConfirm} />

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
              <Stack.Screen options={{title:""}} name="Login" component={LoginPage}/>
              <Stack.Screen options={{title:"Sign Up!"}} name = "SignUp" component = {SignUpPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      </AuthContext.Provider>

    );
  }

}
