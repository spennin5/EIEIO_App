import * as React from 'react';
import { View, Text, TextInput, Button,Modal, TouchableOpacity,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
export default function MapPage(props){
  return(
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView style={{
        width: "100%",
        height: "50%",
      }} />
    </View>
  );
}
