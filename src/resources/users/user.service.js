/**
 * @module UserBD
 * @description imports the model User DB entity
 */
const BD = require('./user.memory.repository').UserBD;

/** 
 * Calls a method on a module. See the documentation of the UsersBD class.
 * @method 
 * @name createNewUser
 * @param {string} req
 * @return {object} - user entity object
 * */
const createNewUser = (req) => {
  let answer = null;
  if (req) {
   answer = BD.createNewUser(req)
  }
   return answer;
}


/** 
 * Calls a method on a module. See the documentation of the UsersBD class.
 * @method 
 * @name getAll
 * @return {Array} - Array user entity object
 */
const getAll = () => BD.getAll();

/** 
 * Calls a method on a module. See the documentation of the UsersBD class.
 * @method 
 * @name getUser
 * @param {string} req - userId
 * @return {object} - User entity object
 */
const getUser = (userId) => BD.getUser(userId);

/** 
 * Calls a method on a module. See the documentation of the UsersBD class.
 * @method 
 * @name getUser
 * @param {string} req - userId
 * @return {string|null} - string "OK" if  succesfull, null if user not exist
 */
const deleteUser = (userId) => BD.deleteUser(userId);

/** 
 * Calls a method on a module. See the documentation of the UsersBD class.
 * @method 
 * @name getUser
 * @param {string} userId - userId
 * @param {object}  options - object with updatable options
 * @return {string|null} - string "OK" if  succesfull, null if user not exist
 */
const updateUser = (userId, options) => BD.updateUser(userId, options);


module.exports.getAll = getAll;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.createNewUser = createNewUser;
