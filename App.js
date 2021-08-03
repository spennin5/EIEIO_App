import * as React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import MappingComponent from './Components/mapComponent.js';
import ItemCard from './Components/itemCard.js';

export default function App() {
  return (
    <React.Fragment>
      <MappingComponent/>
      <ItemCard sellerName="Joe" item="Potato"/>
      <ItemCard sellerName="Mama" item="Cucumber"/>
    </React.Fragment>
  );
}
