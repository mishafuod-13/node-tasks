import { EntityManager } from 'typeorm';
import {ITask} from './task.model';
import {
    addTask, 
    getTasks, 
    getTaskById,
    updateTask,
    deleteTask
} from './task.memory.repository'

const addTaskByBoardId = async (cb:EntityManager, boardId:string|undefined, options:ITask):Promise<ITask> => addTask(cb,boardId,options);

const getTasksByBoardId = async (cb:EntityManager, boardId:string|undefined):Promise<ITask[]> => getTasks(cb, boardId);

const getTaskByTaskId = async ( cb:EntityManager, boardId:string|undefined,taskId:string|undefined):Promise<ITask> => getTaskById(cb, boardId, taskId);

const updateTaskById = async (cb:EntityManager, boardId:string|undefined, taskId:string|undefined, options:ITask):Promise<ITask> => updateTask(cb, boardId, taskId, options);

const deleteTaskById = async (cb:EntityManager, taskId:string|undefined):Promise<'OK'> => deleteTask(cb, taskId);


export {addTaskByBoardId, getTasksByBoardId, getTaskByTaskId, updateTaskById, deleteTaskById};