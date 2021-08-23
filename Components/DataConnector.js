var fs = require('expo-file-system');

export class User{
  constructor(name, username, password, zipCode,type){
    this.name = name;
    this.username = username;
    this.password = password;
    this.zipCode = zipCode;
    this.type = type
  }
  printUser(){
    console.log(this);
  }
  async saveUser(){
    let userObj = JSON.stringify(this);
    await fs.writeAsStringAsync(fs.documentDirectory+'user.txt',userObj);

  }
  loadUser(){

  }
}

export function saveUser(user){

}

export async function authenticateUsers(){
  const retrievedObj = await fs.readAsStringAsync(fs.documentDirectory+"user.txt");
  console.log(retrievedObj);
}

export function saveItem(item){

}
export function loadItem(item){

}
