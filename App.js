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
import HomePage from './Pages/Home.js';
import NewItemPage from './Pages/NewItem.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import {AuthContext, UserContext} from './Components/Context.js';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  if(isLoggedIn){
    return(
      <AuthContext.Provider value = {[isLoggedIn,setIsLoggedIn]}>
        <UserContext.Provider value = {[isSeller,setIsSeller]}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name = "Home" component = {HomePage}/>
              <Stack.Screen name = "NewItem" component = {NewItemPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      </AuthContext.Provider>
    );
  }
  if(!isLoggedIn){
    return(
      <AuthContext.Provider value = {[isLoggedIn,setIsLoggedIn]}>
        <UserContext.Provider value = {[isSeller,setIsSeller]}>
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
