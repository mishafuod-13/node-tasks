import {ITask} from './task.model';
import { EntityManager } from 'typeorm';
import {
    addTask, 
    getTasks, 
    getTaskById,
    updateTask,
    deleteTask
} from './task.memory.repository'

const addTaskByBoardId = async (cb:EntityManager, boardId:string|undefined, options:ITask):Promise<ITask> => await addTask(cb,boardId,options);

const getTasksByBoardId = async (cb:EntityManager, boardId:string|undefined):Promise<ITask[]> => await getTasks(cb, boardId);

const getTaskByTaskId = async ( cb:EntityManager, boardId:string|undefined,taskId:string|undefined) => await getTaskById(cb, boardId, taskId);

const updateTaskById = async (cb:EntityManager, boardId:string|undefined, taskId:string|undefined, options:ITask) => await updateTask(cb, boardId, taskId, options);

const deleteTaskById = async (cb:EntityManager, boardId:string|undefined, taskId:string|undefined) => await deleteTask(cb, boardId, taskId);


export {addTaskByBoardId, getTasksByBoardId, getTaskByTaskId, updateTaskById, deleteTaskById};