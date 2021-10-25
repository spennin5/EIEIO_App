import * as React from 'react';
import { StyleSheet, View,ScrollView, Text, Image,TouchableOpacity,Modal,Button, Touchable } from 'react-native';
import {AssetObject as assets} from '../Components/DataConnector.js';
import users from '../ForDemo/demoUsers.json';

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SellerProfile({route,props}){
  console.log(route)
  console.log("Here are our users: "+users[route.params.sellerName].name)
  let seller = users[route.params.sellerName]
  return(
    <View style={styles.profileLayout}>
    
    <View>
      <Image style={styles.profilePic} source={assets[seller.src]}  />
      <Text style={styles.profileInfo}>{seller.name}</Text>
      <Text style={styles.profileInfo}>Rating: {seller.rating}</Text>
    </View>
    
      <View style={{alignItems:'center', paddingTop: 20}}>
        <Stars
          default={seller.rating}

          count={5}
          half={true}
          starSize={400}
          fullStar={<View style={styles.starView}><Icon size={40} name={'star'} style={[styles.myStarStyle]}/></View>}
          emptyStar={<View style={styles.starView}><Icon size={40} name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/></View>}
          halfStar={<View style={styles.starView}><Icon size={40} name={'star-half'} style={[styles.myStarStyle]}/></View>}
          disabled={true}
        />
      </View>

    </View>

  )
}
const styles = StyleSheet.create({

  profileLayout: {
    display: 'flex',
    flexDirection: 'row'
  },

  profileInfo: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 5,
    fontWeight: 'bold'
  },

  profilePic: {
    maxHeight: 150,
    maxWidth: 150
  },

  myStarStyle: {
    color: '#3c8024',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    justifyContent:'center',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,


  },
  myEmptyStarStyle: {
    color: 'white',
  },
  starView:{
    height: 100,
    width: 50,
    alignItems:'center'
  }
});
