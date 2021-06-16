//import { IUser } from "./user.model";
import "reflect-metadata";

//const UserModel = require('./user.model').User;

//const HandleError = require('../middleware/handleerrors')

//const {userUpdateDelete} = require('./user.update.delete');

//import {createConnection} from "typeorm";

//import {User} from './user.model';



//const createUser (user) => {

//}


  



/*
  async createNewUser (options:IUser) {
    const NewUser = new User(options);
    await NewUser.save()
    console.log (NewUser)
    return NewUser
  }

 const deleteUser = async ( userId:string ):Promise<'OK'|null> => await {
    const result = await this.findUser(userId);
    if (result !== null && typeof result === 'number' ) {
      this.users.splice(result,1);
      userUpdateDelete(userId);
      return "OK";
    }
    throw HandleError.Unauthorized;
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
    throw HandleError.NotFound;
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
    throw HandleError.NotFound;


  async getAll =  ():Promise<Array<IUserResponse>> {
      const reposit:Array<IUser> = this.users;
      const arrResp:Array<IUserResponse> = reposit.map (user => user.toResponse());
      return arrResp;
  }
  */

  module.exports = {createUser}