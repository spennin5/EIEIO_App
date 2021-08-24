import * as React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {User} from '../Components/DataConnector.js';
export default function SignUp({navigation}){
  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passMatch,setPassMatch] = React.useState(false);
  const [selectedUserType, setSelectedUserType] = useState('Buyer');
  function ValidatePassMatch(){
    const pass1 = password;
    const pass2 = confirmPassword;
    const match = pass1 === pass2;
    if(match){
      if(pass1.length > 0){
        //Temporary dummy data to make and store a user
        let user = new User(username,username,password,11111,selectedUserType);
        user.saveUser();
        //Return to login page
        navigation.navigate('Login')
      }
      //Error check
      else{
        alert('Password Too Short')
      }
    }
    //Error check
    else{
      alert('Passwords Dont Match')
    }
  }
  return(
    <View>
      <Text>Username: </Text>
      <TextInput onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput onChangeText={text=>setPassword(text)} secureTextEntity={true}/>
      <Text>Confirm Password: </Text>
      <TextInput onChangeText={text=>setConfirmPassword(text)} secureTextEntity={true}/>
      <Button title="Submit"
      onPress = {()=>ValidatePassMatch()}
      />
      <Picker
        selectedValue={selectedUserType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedUserType(itemValue)
        }>
        <Picker.Item label="Buyer" value="buyer" />
        <Picker.Item label="Seller" value="seller" />
      </Picker>
    </View>
  );
}
