/*
Task: This file is the main home page for buyer profiles. It displays items for sale in their area
Parameters: 'navigation' allows for page navigation within the navigation tree
Error Handling: N/A
Author: Sam Pennington
*/
import * as React from 'react';
import { View, Text, TextInput, Button,Modal, TouchableOpacity,StyleSheet} from 'react-native';
import {AuthContext,UserContext} from '../Components/Context.js';
import TopBar from '../Components/topBar.js';
import ItemCard from '../Components/itemCard';
import DemoItems from '../ForDemo/demoItemsFunctions.js';
import { SearchBar } from 'react-native-elements';
import {useContext} from 'react';


export default function BuyerHome({navigation}){
  //Context variables from UserContext
  const [user,setUser] = React.useContext(UserContext);
  const [searchZip, setSearchZip] = React.useState('30602');
  const [searchBoxVal, setSearchBoxVal] = React.useState('');
  function updateSearchZip(zip){
    setSearchBoxVal(zip);
    if(zip.length == 5){
      setSearchZip(zip);
    }
  }

  return(
    <View>
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.button}>
          <Button  title="Map View"/>
        </TouchableOpacity>

        <TopBar/>
      </View>
      <View style={styles.view}>
        <SearchBar placeholder="Find Produce in Your Zip Code" onChangeText={updateSearchZip} value={searchBoxVal}/>
        <DemoItems zipCode={searchZip}/>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  view:{
    backgroundColor:'rgba(52,52,52,.0)',

  },
  container:{
    flex:1
  },
  topRow:{
    height: 50,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  button:{
    alignItems:'flex-start',
    justifyContent:'center',
    flex:1
  }
});
