import {IUserResponse} from './user.model';

const {UserBD} = require('./user.memory.repository');

const createNewUser = async (req:IUserResponse):Promise<IUserResponse> => UserBD.createNewUser(req);

const getAll = async ():Promise<Array<IUserResponse>> => UserBD.getAll();

const getUser = async (userId:string):Promise<IUserResponse|null> => UserBD.getUser(userId);

const deleteUser = async (userId:string):Promise<'OK'|null> => UserBD.deleteUser(userId);

const updateUser = async (userId:string, options:IUserResponse):Promise<IUserResponse|null> => UserBD.updateUser(userId, options);

module.exports = {getAll, getUser, updateUser, deleteUser,createNewUser };
