"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { TaskBD } = require('./task.memory.repository');
const addTask = async (boardId, options) => TaskBD.addTask(boardId, options);
const getTasks = async (boardId) => TaskBD.getTasks(boardId);
const getTaskById = async (boardId, taskId) => TaskBD.getTaskById(boardId, taskId);
const updateTask = async (boardId, taskId, options) => TaskBD.updateTask(boardId, taskId, options);
const deleteTask = async (boardId, taskId) => TaskBD.deleteTask(boardId, taskId);
module.exports = { updateTask, addTask, getTasks, getTaskById, deleteTask };
