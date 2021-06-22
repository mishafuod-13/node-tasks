import "reflect-metadata";
import { EntityManager} from "typeorm";
import { User, IUser, UserView } from "./user.model";
import {Memory} from '../helpers/delete.memory'

const HandleError = require('../middleware/handleerrors')


const createUser = async (cb:EntityManager, useropt:IUser):Promise<UserView|undefined> => {
  const user = new User(useropt);
  await cb.save(User, user);
  const res = await cb.findOneOrFail(UserView, { where: { id: user.id} })
  return res
}

const getAll = async(cb: EntityManager):Promise<UserView[]>  =>  cb.find(UserView)

  
const deleteUser = async (cb: EntityManager,  userId:string ):Promise<'OK'| null> => {
  const result = await cb.findByIds(User, [userId]);
    if (result) {
    Memory.setUserId(userId);
    console.log ("!!!!!!!!!!!!!!")
    await cb.delete(User, userId);
    return "OK"
    }
    throw HandleError.Unauthorized;
  }

const updateUser = async (cb:EntityManager,  userId:Omit<User, 'id'>, useropt:User):Promise<UserView> => {
  const result:User|undefined = await cb.findOne(User, userId);
    if (result !== undefined && result.password === useropt.password) {
      await cb.update(User, userId, useropt);
      return cb.findOneOrFail(UserView, { where: { id: userId} })
    }
    throw HandleError.NotFound;
  }


 const getUser = async(cb:EntityManager, userId:Omit<User, 'id'>):Promise<UserView> => {
    const result = cb.findOneOrFail(UserView, { where: { id: userId} });
    if(result) {
      return result;
    }
    throw HandleError.NotFound;
  }


  module.exports = {createUser, getAll, deleteUser, updateUser, getUser}