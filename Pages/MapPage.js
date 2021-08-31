import * as React from 'react';
import { View, Text, TextInput, Button,Modal, TouchableOpacity,StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

var itemJson = require('../ForDemo/demoItems.json')

export default function MapPage(props){
  let itemsInCode = itemJson[props.zipCode];
  console.log(props)
  console.log(itemsInCode)
  try{
    let keyArray = Object.keys(itemJson[props.zipCode]);
    return(
      <View style={styles.container}>
        <MapView style={{width: "100%", height: "50%"}}>
        {
          keyArray.map((key)=>{
            console.log("Item: "+itemsInCode[key].lat)
            console.log("Item: "+itemsInCode[key].long)
            return(
              <Marker key={itemsInCode[key].item} coordinate={{latitude:-84.2,longitude:34.2}}/>
            )
          })
        }
        </MapView>
      </View>
    );
  }
  catch(e){
    console.log(e);
    return(
      <View><Text>Not Found</Text></View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
