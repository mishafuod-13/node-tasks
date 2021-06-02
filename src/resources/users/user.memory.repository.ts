import { IUser, IUserResponse } from "./user.model";

const UserModel = require('./user.model').User;

const {userUpdateDelete} = require('./user.update.delete');

class UsersBD {

  users: Array<IUser>

  constructor() {
    this.users = [];
  }

  createNewUser (options:string) {
    const newUser = new UserModel(options);
    this.users.push(newUser)
    return newUser.toResponse();
  }

  deleteUser( userId:string ):string|null|number|undefined{
    const result = this.findUser(userId);
    if (result) {
      this.users.splice(result,1);
      userUpdateDelete(userId);
      return "OK"
    }
    return result;
  }


  updateUser ( userId:string, options:IUser ):IUserResponse|number|null|undefined{
    const result = this.findUser(userId);
    if (result) {
      const newUser = new UserModel (options);
      this.users.splice(result,1,newUser);
      return newUser?.toResponse()
    }
    return result;
  }


  getUser (userId:string):IUserResponse|null|number|null|undefined {
    const result = this.findUser(userId);
    if (typeof result === 'number'){
        const user:IUser|undefined = this.users[result];
        if (typeof user !== 'undefined')
        return user.toResponse();
    }
    return result;
  }

 
  findUser (userId:string) {
    const result:number[] = [];
    this.users.forEach ( (user, index) => {
      if ( user.id === userId ) {
       result.push(index);
      }
    });
       if (result.length === 1 && typeof result[0] !== 'undefined') {
        return result[0];
       }
    return null;
  }

   getAll () {
      const reposit:Array<IUser> = this.users;
      const arrResp:Array<IUserResponse> = reposit.map(user => user.toResponse());
      return arrResp;
  }
  
}

const  UserBD = new UsersBD;

module.exports.UserBD = UserBD;