import {Repository} from "typeorm";
import {User, IUser} from "./user.model";

const {
    createUser,
    getAll, 
    deleteUser, 
    updateUser,
    getUser 
} = require ('./user.memory.repository');



const createNewUser = async(cb:Repository<User>, userEnt: IUser) => await createUser(cb, userEnt)

const getAllUsers = async (cb:Repository<User>) => await getAll (cb);

const deleteUserById = async (cb: Repository<User>, userId:Omit<User, 'id'> ):Promise<'OK'> => await deleteUser(cb, userId);

const updateUserById = async (cb: Repository<User>, userId:Omit<User, 'id'>, options:User):Promise<User> => updateUser(cb, userId, options);

const getUserById = async (cb: Repository<User>, userId:Omit<User, 'id'>):Promise<User> => getUser(cb, userId);

module.exports = { createNewUser, getAllUsers, deleteUserById, updateUserById, getUserById};
