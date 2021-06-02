import {IUserResponse} from './user.model';

const BD = require('./user.memory.repository').UserBD;

const createNewUser = (req:IUserResponse) => BD.createNewUser(req);

const getAll = () => BD.getAll();

const getUser = (userId:string) => BD.getUser(userId);

const deleteUser = (userId:string) => BD.deleteUser(userId);

const updateUser = (userId:string, options:IUserResponse) => BD.updateUser(userId, options);

module.exports.getAll = getAll;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.createNewUser = createNewUser;
