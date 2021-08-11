import * as React from 'react';

import { View, Text, TextInput, Button} from 'react-native';

function LoginPage({navigation}){
  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return(
    <View>
      <Text>Username: </Text>
      <TextInput onChangeText={text=>setUsername(text)}/>
      <Text>Password: </Text>
      <TextInput onChangeText={text=>setPassword(text)} secureTextEntity/>
      <Text>'Your Username is {username} and your Password is {password}'</Text>
      <Button
      title="Submit"
      onPress={() =>
        navigation.navigate('Items')
      }
    />
    </View>
  );
}

export default LoginPage;
