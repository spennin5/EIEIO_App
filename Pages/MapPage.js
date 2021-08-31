import * as React from 'react';
import { View, Text, TextInput, Button,Modal, TouchableOpacity,StyleSheet} from 'react-native';
import MapView, {Marker,Callout} from 'react-native-maps';

var itemJson = require('../ForDemo/demoItems.json')

export default function MapPage(props){
  let itemsInCode = itemJson[props.zipCode];
  let markers = [];
  try{
    let keyArray = Object.keys(itemJson[props.zipCode]);
    keyArray.map((key)=>(
      markers.push({title:itemsInCode[key].item,price:itemsInCode[key].price, coordinates:{
        latitude:itemsInCode[key].lat,
        longitude:itemsInCode[key].long
      }})
    ))
    console.log("Markers: "+markers)
    return(
      <View style={styles.container}>
        <MapView style={styles.map}
        initialRegion={mapInitialRegion}>
        {
          markers.map((marker,index)=>(
              <Marker key={marker.title} coordinate={marker.coordinates} title={marker.title}>
                <Callout>
                  <Text>{marker.title}</Text>
                  <Text>{marker.price}</Text>
                </Callout>
              </Marker>
          ))}
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
  },
  map:{
    width: "100%",
    height: "90%"
  }
})
const mapInitialRegion = {
  latitude: 33.92555,
  longitude: -83.37327,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}
