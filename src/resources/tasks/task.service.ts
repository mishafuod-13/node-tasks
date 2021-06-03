import {ITask} from './task.model'

const {TaskBD} = require('./task.memory.repository');


const addTask = async (boardId:string, options:ITask)  =>  TaskBD.addTask( boardId,options );


const getTasks = async (boardId:string) => TaskBD.getTasks(boardId);


const getTaskById = async (boardId:string,taskId:string) => TaskBD.getTaskById(boardId,taskId);


const updateTask = async (boardId:string, taskId:string, options:ITask) =>  TaskBD.updateTask(boardId,taskId,options);


const deleteTask = async (boardId:string, taskId:ITask) => TaskBD.deleteTask(boardId, taskId);


module.exports = {updateTask, addTask, getTasks, getTaskById, deleteTask };