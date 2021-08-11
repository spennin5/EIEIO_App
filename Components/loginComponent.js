import * as React from 'react';
import { View } from 'react-native';

function loginComponent(){
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  return(
    <View>
      <Text>Username: </Text>
      <TextInput onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput onChangeText={text=>setPassword(text)} secureTextEntity/>
      <Button title='Submit' onPress={null/*Do a submit function here*/}/>
      <Text>'Your Username is {username} and your Password is {password}'</Text>
    </View>
  );
}

export default loginComponent;
