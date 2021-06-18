//import { IUser } from "./user.model";
import "reflect-metadata";
import { Repository } from "typeorm";
import { User, IUser } from "./user.model";



//const UserModel = require('./user.model').User;

const HandleError = require('../middleware/handleerrors')

//const {userUpdateDelete} = require('./user.update.delete');

//import {createConnection} from "typeorm";

//import {User} from './user.model';


const createUser = async (cb:Repository<User>, useropt:IUser):Promise<User|undefined> => {
  const user = new User(useropt);
  await cb.save(user);
  const res = await cb.findOne(user)
  return res
}

const getAll = async(cb: Repository<User>):Promise<User[]>  =>  {
 return await cb.find(); 
}

  
const deleteUser = async (cb: Repository<User>,  userId:Omit<User, 'id'> ):Promise<'OK'| null> => {
  const result = await cb.findByIds([userId]);
    if (result) {
    await cb.delete(userId);
    return "OK"
    }
    throw HandleError.Unauthorized;
  }

const updateUser = async (cb: Repository<User>,  userId:Omit<User, 'id'>, useropt:User):Promise<User> => {
  const result:User|undefined = await cb.findOne(userId);
    if (result !== undefined && result.password === useropt.password) {
      await cb.update(userId, useropt);
      return cb.findOneOrFail(userId);
    }
    throw HandleError.NotFound;
  }


 const getUser = async(cb:Repository<User>, userId:Omit<User, 'id'>):Promise<User> => {
    const result:User|undefined = await cb.findOne(userId);
    if(result) {
      return result;
    }
    throw HandleError.NotFound;
  }


  module.exports = {createUser, getAll, deleteUser, updateUser, getUser}