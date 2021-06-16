"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { UserBD } = require('./user.memory.repository');
const createNewUser = async (req) => UserBD.createNewUser(req);
const getAll = async () => UserBD.getAll();
const getUser = async (userId) => UserBD.getUser(userId);
const deleteUser = async (userId) => UserBD.deleteUser(userId);
const updateUser = async (userId, options) => UserBD.updateUser(userId, options);
module.exports = { getAll, getUser, updateUser, deleteUser, createNewUser };
