import {ITask} from './task.model'

const {TaskBD} = require('./task.memory.repository');


const addTask = (boardId:string, options:ITask)  =>  TaskBD.addTask( boardId,options );


const getTasks = (boardId:string) => TaskBD.getTasks(boardId);


const getTaskById = (boardId:string,taskId:string) => TaskBD.getTaskById(boardId,taskId);


const updateTask = (boardId:string, taskId:string, options:ITask) =>  TaskBD.updateTask(boardId,taskId,options);


const deleteTask = (boardId:string, taskId:ITask) => TaskBD.deleteTask(boardId, taskId);

module.exports.updateTask = updateTask;
module.exports.addTask = addTask;
module.exports.getTasks = getTasks;
module.exports.getTaskById = getTaskById;
module.exports.deleteTask = deleteTask;