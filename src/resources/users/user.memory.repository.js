const UserModel = require('./user.model.js').User;

class UsersBD {
  constructor() {
    this.model = UserModel;
    this.users = [];
  }

  createNewUser (options) {
    const newUser = new UserModel(options);
    this.users.push(newUser)
    return newUser.toResponse();
  }


  deleteUser( userId ) {
    const result = this.findUser(userId);
    if (result) {
      this.users.splice(result,1);
      return "OK"
    }
    return result;
  }

  updateUser ( userId, options ){
    const result = this.findUser(userId);
    if (result) {
      const newUser = new UserModel (options);
      this.users.splice(result,1,newUser);
      return newUser.toResponse()
    }
    return result;
  }

  getUser (userId) {
    const result = this.findUser(userId);
    if (result !== null){
      return this.users[result].toResponse()
    }
    return result;
  }

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

  getAll () {
      return this.users
        .map(user => user.toResponse())
  }
  
}

const UserBD = new UsersBD();
module.exports.UserBD = UserBD;
