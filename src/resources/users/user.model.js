/**
 * Import uuidv4 module
 * @module uuidv4
 */
const { v4: uuidv4 } = require('uuid');

class User {
   /**
 * @requires uuidv4
 * * @this User
     * Create User - entity.
     * @param {string} [id=uuidv4()] - User ID.
     * @param {string} [name="USER"]  - User name.
     * @param {string} [login="user"] - User login.
     * @param {string} [password = "P@55w0rd"] - User password. 
     */
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

  /** 
     * Returns entity values (except for the "password" key value).
     * @return {object} - returns an object with keys id, name, login.
     */
  toResponse () {
    const { id, name, login } = this;
    return { id, name, login };
  }  
}

/**
 * Export User class
 * @module User
 */
module.exports.User = User;