import { NextFunction, Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';
import {ITask} from './task.model';

import { addTaskByBoardId, 
  getTasksByBoardId,
  getTaskByTaskId,
  updateTaskById,
  deleteTaskById
} from './task.service'

const router = require('express').Router();

createConnection().then (async ()=> {
  
const entityManager =  getManager();

router.route('/:boardId/tasks').post(async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try {
      const {boardId} = req.params;
      const taskoption:ITask = req.body
      const nTask = await addTaskByBoardId(entityManager, boardId, taskoption); 
        res
        .status(201)
        .json(nTask);
    } catch (err) {
      next(err)
    }
  });

  router.route('/:boardId/tasks').get(async (req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId} = req.params;
      const result = await getTasksByBoardId(entityManager, boardId);
        res
         .json(result)
    } catch (err) {
      next(err);
    }
   });

   router.route('/:boardId/tasks/:taskId').get(async ( req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId, taskId} = req.params;
      const result = await getTaskByTaskId(entityManager, boardId, taskId);
      res
        .json(result)
    } catch (err) {
      next(err)
    }
   });

   router.route('/:boardId/tasks/:taskId').put(async (req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId, taskId} = req.params;
      const result = await updateTaskById (entityManager,boardId, taskId, req.body);
      res
        .json(result)
    } catch (err) {
      next(err);
    }
   });

   router.route('/:boardId/tasks/:taskId').delete(async (req:Request, res:Response, next: NextFunction) => {
    try {
      const {taskId} = req.params;
      const result =  await deleteTaskById (entityManager, taskId);
      if (result == "OK") {
        res
        .status(204)
        .send('The task has been deleted')
      }
    } catch (err) {
      next(err);
    }
   });


});


module.exports = router;