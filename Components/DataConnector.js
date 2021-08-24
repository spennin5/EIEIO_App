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

  async loadUsers(){
    const retrievedObj = await fs.readAsStringAsync(fs.documentDirectory+"user.txt");
    return retrievedObj;
  }
  //Save current user to a local JSON file
  async saveUser(){
    //in case we make a boo-boo, this command deletes the old log file
    //await fs.deleteAsync(fs.documentDirectory+"user.txt");

    const fileInfo = await fs.getInfoAsync(fs.documentDirectory+"user.txt");
    //let newUserObj = {}
    //newUserObj[String(this.username)] = JSON.stringify(this);
    if(fileInfo.exists){
      let oldUserObj = await this.loadUsers();
      oldUserObj = JSON.parse(oldUserObj);
      oldUserObj[String(this.username)] = this;
      //oldUserObj[String(this.username)] = JSON.stringify(newUserObj[String(this.username)]);
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


//TODO: check if a username and password combo is in the user.txt file
export async function authenticateUsers(inputUsername,inputPassword){
  let retrievedObj = await fs.readAsStringAsync(fs.documentDirectory+"user.txt");
  //console.log("Retrieved File Content: "+retrievedObj)
  retrievedObj = JSON.parse(retrievedObj);
  let usernameSet = Object.keys(retrievedObj);
  //console.log("Username set: "+usernameSet);
  //console.log("Input user: "+inputUsername);
  let returnedSet = [];//First index will contain validLogin (boolean), second index contains User object (Object)
  if(usernameSet.includes(inputUsername)){
    let specificUser = retrievedObj[inputUsername];
    //console.log("Specific User Info: "+specificUser)
    //specificUser = JSON.parse(specificUser)
    //console.log("Specific User Keys: "+Object.keys(specificUser))
    var password = specificUser.password;
    //console.log("password:"+password);
    if(password == inputPassword){

      returnedSet.push(true);
      let user = new User (specificUser.name, specificUser.username,specificUser.password, specificUser.zipCode,specificUser.type);
      returnedSet.push(user);
      return returnedSet;
    }
  }
}

export function saveItem(item){

}
export function loadItem(item){

}
