var fs = require('expo-file-system');

export class User{
  //Create new user
  constructor(name, username, password, zipCode,type){
    this.name = name;
    this.username = username;
    this.password = password;
    this.zipCode = zipCode;
    this.type = type
  }
  //Display new user in console
  printUser(){
    console.log(this);
  }
  //Save current user to a local JSON file
  async saveUser(){
    let userObj = JSON.stringify(this);
    await fs.writeAsStringAsync(fs.documentDirectory+'user.txt',userObj);

  }
  /*TODO fill in function to load users. Due to localized storage rules,
  you can't append to a file without loading its contents and re-saving the whole thing first.
  So, to save a new user, we must load the old users with this function, turn them to an object,
  add the new user, JSON. stringify, and then resave
  */
  async loadUsers(){

  }
}

export function saveUser(user){

}
//TODO: check if a username and password combo is in the user.txt file
export async function authenticateUsers(){
  const retrievedObj = await fs.readAsStringAsync(fs.documentDirectory+"user.txt");
  console.log(retrievedObj);
}

export function saveItem(item){

}
export function loadItem(item){

}
