
import {ITask, Task} from './task.model';
import { EntityManager } from 'typeorm';
import {Board} from '../boards/boards.model'

const HandleError = require('../middleware/handleerrors')

const addTask = async (cb: EntityManager, boardIds:string|undefined, taskoption:ITask) =>  {
      const board  = await cb.findOneOrFail(Board, boardIds);
      if (board && boardIds !== undefined) {
        taskoption.boardId = boardIds
        const ntask = new Task(taskoption);
        await cb.save (Task, ntask);
        return ntask;
      }  
     throw HandleError.BadReqest
}

const getTasks = async(cb:EntityManager, boardId:string|undefined):Promise<ITask[]> => {
    if (boardId !== undefined ) {
    const tasks  = await cb.find(Task, {boardId: boardId});
      if (tasks.length)  {
      return tasks
      }
    }
      throw HandleError.NotFound
}

const getTaskById =async(cb:EntityManager, boardId:string|undefined, taskId:string|undefined):Promise<ITask> => {
   const result = await cb.findOneOrFail(Task, {id:taskId, boardId: boardId});
   if (result) {
     return result
   }
  throw HandleError.NotFound;
}

const updateTask = async(cb:EntityManager,boardId:string|undefined, taskId:string|undefined, options:ITask):Promise<Task> => {
  const check = await cb.findOneOrFail(Task,{id:taskId, boardId: boardId});
  if (check) {
    await cb.update(Task,{id:taskId, boardId: boardId}, options);
    return await cb.findOneOrFail(Task, {id:taskId, boardId: boardId});
  }
  throw HandleError.NotFound
}

const deleteTask = async(cb:EntityManager, boardId:string|undefined, taskId:string|undefined):Promise<'OK'> => {
  const check = cb.hasId(Task, taskId)
  if (check) {
    await cb.delete(Task,{id:taskId, boardId:boardId});
    return 'OK'
  }
  throw HandleError.NotFound
}


export {addTask, getTasks, getTaskById, updateTask, deleteTask};