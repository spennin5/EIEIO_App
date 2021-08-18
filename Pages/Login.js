import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TextInput, Button} from 'react-native';

function LoginPage({navigation}){
  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  function validateUser(){
    //In the future we need to validate that the username and password are valid against a DB
    navigation.navigate("Home");
  }
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
        {save("loggedOnBool","loggedIn");
        validateUser();
        }

        //navigation.navigate('Items')
      }
      />
      <Button
      title = "Sign Up"
      onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}
async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
export default LoginPage;
