/**
 * @module TaskBD
 * @description Export TaskBD module
 */
const {TaskBD} = require('./task.memory.repository');

/** 
 * Calls a method on a module. See the documentation of the TasksBD class.
 * @method 
 * @name addTask
 * @param {string} boardId
 * @param {object} options
 * @return {object|Error} 
 * */
const addTask = (boardId, options)  =>  TaskBD.addTask( boardId,options );

/** 
 * Calls a method on a module. See the documentation of the TasksBD class.
 * @method 
 * @name getTasks
 * @param {string} boardId
 * @return {Array|Error} 
 * */
const getTasks = (boardId) => TaskBD.getTasks(boardId);

/** 
 * Calls a method on a module. See the documentation of the TasksBD class.
 * @method 
 * @name getTaskById
 * @param {string} boardId
 * @param {string} taskId
 * @return {object|Error|undefined} - if the operation was successful, otherwise an error or undefined
 * */
const getTaskById = (boardId,taskId) => TaskBD.getTaskById(boardId,taskId);

/** 
 * Calls a method on a module. See the documentation of the TasksBD class.
 * @method 
 * @name updateTask
 * @param {string} boardId
 * @param {string} taskId
 * @param {object} options
 * @return {object|undefined} return new task-object or undefined if input values are incorrect.
 * */
const updateTask = (boardId, taskId, options) =>  TaskBD.updateTask(boardId,taskId,options);

/** 
 * Calls a method on a module. See the documentation of the TasksBD class.
 * @method 
 * @name updateTask
 * @param {string} boardId
 * @param {string} taskId
 * @return {string|Error} - if the operation was successful, otherwise an error
 * */
const deleteTask = (boardId, taskId) => TaskBD.deleteTask(boardId, taskId);

module.exports.updateTask = updateTask;
module.exports.addTask = addTask;
module.exports.getTasks = getTasks;
module.exports.getTaskById = getTaskById;
module.exports.deleteTask = deleteTask;