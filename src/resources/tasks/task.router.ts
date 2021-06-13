import { NextFunction, Request, Response } from 'express';

import {ITask} from './task.model';

const router = require('express').Router();
const {
  addTask, 
  getTasks, 
  getTaskById, 
  updateTask,
  deleteTask } = require('./task.service');

router.route('/:boardId/tasks').post(async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try {
      const {boardId} = req.params;
      const posTask:ITask = req.body
      const NewTask = await addTask(boardId, posTask); 
        res
        .status(201)
        .json(NewTask);
    } catch (err) {
      next(err)
    }
  });

  router.route('/:boardId/tasks').get(async (req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId} = req.params;
      const result = await getTasks(boardId);
        res
         .json(result)
    } catch (err) {
      next(err);
    }
   });
  
   router.route('/:boardId/tasks/:taskId').get(async ( req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId, taskId} = req.params;
      const result = await getTaskById(boardId,taskId);
      res
        .json(result)
    } catch (err) {
      next(err)
    }
   });

   router.route('/:boardId/tasks/:taskId').put(async (req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId, taskId} = req.params;
      const result = await updateTask (boardId, taskId, req.body);
      res
        .json(result)
    } catch (err) {
      next(err);
    }
   });

   router.route('/:boardId/tasks/:taskId').delete(async (req:Request, res:Response, next: NextFunction) => {
    try {
      const {boardId, taskId} = req.params;
      await deleteTask (boardId, taskId);
      res
        .status(204)
        .send('The task has been deleted')
    } catch (err) {
      next(err);
    }
   });
  
module.exports = router;