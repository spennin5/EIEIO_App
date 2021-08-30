/*
Task: This file handles local data operations and can be converted to database storage connections in one centralized place
Parameters: N/A
Error Handling: N/A
Author: Sam Pennington
*/
var fs = require('expo-file-system');

export class User{
  //Create new user
  constructor(name, username, password, email, zipCode,type){
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.zipCode = zipCode;
    this.type = type
  }
  //Display new user in console
  printUser(){
    console.log(this);
  }

  async loadUsers(){
    const retrievedObj = await fs.readAsStringAsync(fs.documentDirectory+"user.txt");
    return retrievedObj;
  }
  //Save current user to a local JSON file
  async saveUser(){
    //in case we make a boo-boo, this command deletes the old log file
    //await fs.deleteAsync(fs.documentDirectory+"user.txt");

    const fileInfo = await fs.getInfoAsync(fs.documentDirectory+"user.txt");
    if(fileInfo.exists){
      let oldUserObj = await this.loadUsers();
      oldUserObj = JSON.parse(oldUserObj);
      oldUserObj[String(this.username)] = this;
      console.log(oldUserObj);
      let toSaveUserObj = JSON.stringify(oldUserObj);
      await fs.writeAsStringAsync(fs.documentDirectory+'user.txt',toSaveUserObj);
    }
    else{
      console.log("Writing new user file");
      let newUserObj = {};
      newUserObj[String(this.username)] = this;
      newUserObj = JSON.stringify(newUserObj);
      await fs.writeAsStringAsync(fs.documentDirectory+'user.txt',newUserObj);
    }
  }

}
/*
  Check if supplied username exists in the local storage file and if the password matches the record
  Parameters: 'inputUsername' and 'inputPassword' both hold the value submitted by the user on the login sceen
  Error Checking: TODO
  Author: Sam Pennington
*/
export async function authenticateUsers(inputUsername,inputPassword){
  let retrievedObj = await fs.readAsStringAsync(fs.documentDirectory+"user.txt");
  retrievedObj = JSON.parse(retrievedObj);
  let usernameSet = Object.keys(retrievedObj);
  let returnedSet = [];//First index will contain validLogin (boolean), second index contains User object (Object)
  if(usernameSet.includes(inputUsername)){
    let specificUser = retrievedObj[inputUsername];
    var password = specificUser.password;
    if(password == inputPassword){
      returnedSet.push(true);
      let user = new User (specificUser.name, specificUser.username,specificUser.password, specificUser.email,specificUser.zipCode,specificUser.type);
      returnedSet.push(user);
      return returnedSet;
    }
  }
  else{
    return [false];
  }
}

export function saveItem(item){

}
export function loadItem(item){

}
