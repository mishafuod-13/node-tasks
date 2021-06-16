//import {IUserResponse} from './user.model';

const {createUser} = require('./user.memory.repository');



//const getAll = async ():Promise<Array<IUserResponse>> => UserBD.getAll();

//const getUser = async (userId:string):Promise<IUserResponse|null> => UserBD.getUser(userId);

// const deleteUser = async (userId:string):Promise<'OK'|null> => UserBD.deleteUser(userId);

//const updateUser = async (userId:string, options:IUserResponse):Promise<IUserResponse|null> => UserBD.updateUser(userId, options);

module.exports = { createUser };
