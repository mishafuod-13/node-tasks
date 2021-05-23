const BD = require('./user.memory.repository').UserBD;

const switcher = (req) => {
  let answer = null;
  if (req) {
   answer = BD.createNewUser(req)
  }
   return answer;
}

const getAll = () => BD.getAll();
const getUser = (userId) => BD.getUser(userId);
const deleteUser = (userId) => BD.deleteUser(userId);
const updateUser = (userId, options) => BD.updateUser(userId, options);


module.exports.getAll = getAll;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.switcher = switcher;
