import {EntityManager} from "typeorm";
import {User, IUser} from "./user.model";
import UserView from "./user-view.model";

import {
    createUser,
    getAll, 
    deleteUser, 
    updateUser,
    getUser 
} from './user.memory.repository'

const createNewUser = async(cb:EntityManager, userEnt: IUser):Promise<UserView|undefined> =>  createUser(cb, userEnt)

const getAllUsers = async (cb:EntityManager):Promise<UserView[]> => getAll (cb);

const deleteUserById = async (cb: EntityManager, userId:string|undefined ):Promise<'OK'> =>  deleteUser(cb, userId);

const updateUserById = async (cb: EntityManager, userId:string|undefined, options:User):Promise<IUser> => updateUser(cb, userId, options);

const getUserById = async (cb: EntityManager, userId:string|undefined):Promise<IUser> => getUser(cb, userId);

export { createNewUser, getAllUsers, deleteUserById, updateUserById, getUserById};