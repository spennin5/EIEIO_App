/*
Task: This file shows a map view of where items for sale are located
Parameters: N/A
Error Handling: N/A
Author: 
*/
import * as React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function MappingComponent() {
  return (
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
