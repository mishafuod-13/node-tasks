import { IUser, IUserResponse } from "./user.model";

const UserModel = require('./user.model').User;

const {userUpdateDelete} = require('./user.update.delete');

class UsersBD {

  users: Array<IUser>

  constructor() {
    this.users = [];
  }

  async createNewUser (options:string):Promise<IUserResponse> {
    const newUser = new UserModel(options);
    this.users.push(newUser)
    return newUser.toResponse();
  }

 async deleteUser( userId:string ):Promise<'OK'|null>{
    const result = await this.findUser(userId);
    if (result !== null && typeof result === 'number' ) {
      this.users.splice(result,1);
      userUpdateDelete(userId);
      return "OK";
    }
    return result as null;
  }


  async updateUser ( userId:string, options:IUser ):Promise<IUserResponse|null>{
    const result = await this.findUser(userId);
    if (result !== null) {
      const newUser = new UserModel (options);
      this.users.splice(result,1,newUser);
      return newUser?.toResponse()
    }
    return result;
  }


  async getUser (userId:string):Promise<IUserResponse|null> {
    const result = await this.findUser(userId);
    if (typeof result === 'number'){
        const user:IUser|undefined = this.users[result];
        if (typeof user !== 'undefined')
        return user.toResponse();
    }
    return result as null;
  }

 
  async findUser (userId:string): Promise<number|null> {
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

  async getAll ():Promise<Array<IUserResponse>> {
      const reposit:Array<IUser> = this.users;
      const arrResp:Array<IUserResponse> = reposit.map (user => user.toResponse());
      return arrResp;
  }
  
}

const UserBD:UsersBD = new UsersBD();

module.exports.UserBD = UserBD;