
const { v4: uuidv4 } = require('uuid');

export interface IUser {
  id:string;
  name:string;
  login:string;
  password?:string;
  
}

class User {

  id:string;

  name:string;

  login:string;

  password?:string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  toResponse ():IUser {
    const { id, name, login }:IUser = this;
    return { id, name, login };
  }  
}


module.exports.User = User;