/**
 * Import User -entity class
 * @module User
 */
const UserModel = require('./user.model.js').User;
/**
 * Import function
 * @module userUpdateDelete
 */
const {userUpdateDelete} = require('./user.update.delete');

class UsersBD {
 /**
    * @requires User
    * @requires userUpdateDelete
    * @this UsersBD
     * Create a UserBD entity.
     * @param {Array} [this.users=[]] - Array with Users entities.
     */
  constructor() {
    this.users = [];
  }

  /** 
       * Create new user - entity and puts that on "database".
       * @param {object} options - an object with keys to create a new user.
       * @returns {object} - return new object - user.
       */
  createNewUser (options) {
    const newUser = new UserModel(options);
    this.users.push(newUser)
    return newUser.toResponse();
  }

  /** 
       * Delete user - entity.
       * @param {string} userId - User Id.
       * @returns {string|null} - string "OK" if user deleted, or null 
       */
  async deleteUser( userId ) {
    const result = this.findUser(userId);
    if (result) {
      this.users.splice(result,1);
      await userUpdateDelete(userId);
      return "OK"
    }
    return result;
  }

  /** 
       * Update user - entity and puts that on "database".
       * @param {string} userId - User Id.
       * @param {object} options - an object with keys to update a user- entity.
       * @returns {object|null} -  object user-entity if update succesfull, or null.
       */
  updateUser ( userId, options ){
    const result = this.findUser(userId);
    if (result) {
      const newUser = new UserModel (options);
      this.users.splice(result,1,newUser);
      return newUser.toResponse()
    }
    return result;
  }

  /** 
       * Return user-entity by Id.
       * @param {string} userId - User Id.
       * @returns {object|null} -  object user-entity if update succesfull, or null.
       */
  getUser (userId) {
    const result = this.findUser(userId);
    if (result !== null){
      return this.users[result].toResponse()
    }
    return result;
  }

  /** 
       * Search user-entity in "database".
       * @param {string} userId - User Id.
       * @returns {number|null} -  Returns the index of the match, otherwise null.
       */
  findUser (userId){
    const result = [];
    this.users.forEach ( (user, index) => {
      if ( user.id === userId ) {
       result.push(index);
      }
    });

    if (result.length) {
       if (result.length > 1) {
        throw new Error ("Write error: multiple users")
       }
      return result[0];
    }
    return null;
  }

  /** 
       * Get all user-entities
       * @param {string} userId - User Id.
       * @returns {Array} -  Returns an array with all entities
       */
  getAll () {
      return this.users
        .map(user => user.toResponse())
  }
  
}

/** @constant {object} UserBD - creates an instance of the class UsersBD */
const UserBD = new UsersBD();

/**
 * Export the created instance of the UsersBD class.
 * @module UserBD 
 */
module.exports.UserBD = UserBD;
