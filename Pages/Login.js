import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
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
        {save("loggedOnBool","loggedIn");}

        //navigation.navigate('Items')
      }
    />
    </View>
  );
}
async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
export default LoginPage;
