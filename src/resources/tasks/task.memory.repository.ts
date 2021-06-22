
import { EntityManager } from 'typeorm';
import {ITask, Task} from './task.model';
import {Board} from '../boards/boards.model'

const HandleError = require('../middleware/handleerrors')

const addTask = async (cb: EntityManager, boardIds:string|undefined, taskoption:ITask):Promise<ITask> =>  {
      const board  = await cb.findOneOrFail(Board, boardIds);
      if (board && boardIds !== undefined) {
        const option = {...taskoption, boardId:boardIds}
        const ntask = new Task(option);
        await cb.save (Task, ntask);
        return ntask;
      }  
     throw HandleError.BadReqest
}

const getTasks = async(cb:EntityManager, boardId:string|undefined):Promise<ITask[]> => {
    if (boardId !== undefined ) {
    const tasks  = await cb.find(Task, {boardId});
      if (tasks.length)  {
      return tasks
      }
    }
      throw HandleError.NotFound
}

const getTaskById = async(cb:EntityManager, boardId:string|undefined, taskId:string|undefined):Promise<ITask> => {
   const result = await cb.findOne(Task, {id:taskId, boardId});
   if (result) {
     return result
   }
  throw HandleError.NotFound;
}

const updateTask = async(cb:EntityManager,boardId:string|undefined, taskId:string|undefined, options:ITask):Promise<Task> => {
  const check = await cb.findOneOrFail(Task,{id:taskId, boardId});
  if (check) {
    await cb.update(Task,{id:taskId, boardId}, options);
    return cb.findOneOrFail(Task, {id:taskId, boardId});
  }
  throw HandleError.NotFound
}

const deleteTask = async(cb:EntityManager, taskId:string|undefined):Promise<'OK'> => {
    const tasks = await cb.find(Task,{id:taskId})
    if (tasks.length){
      await cb.remove(Task, tasks);
      return 'OK'
    }
    throw HandleError.NotFound
}


export {addTask, getTasks, getTaskById, updateTask, deleteTask};