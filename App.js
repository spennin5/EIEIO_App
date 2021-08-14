import 'react-native-gesture-handler';//must be at very top
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MapView from 'react-native-maps';
import MappingComponent from './Components/mapComponent.js';
import ItemCard from './Components/itemCard.js';
import LoginPage from './Pages/Login.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';

const Stack = createStackNavigator();
let isLoggedIn = SecureStore.getItemAsync("loggedOnBool");
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn == null ?
          (<Stack.Screen name="Items" component={ItemCard} />)
          :
          (<Stack.Screen
            name="Login"
            component={LoginPage}
          />)
        }
      </Stack.Navigator>
    </NavigationContainer>

  );
}
