import { Request, Response } from 'express';

import {ITask} from './task.model';

const router = require('express').Router();
const {
  addTask, 
  getTasks, 
  getTaskById, 
  updateTask,
  deleteTask } = require('./task.service');

router.route('/:boardId/tasks').post(async (req:Request, res:Response): Promise<void> => {
    try {
      const {boardId} = req.params;
      const posTask:ITask = req.body
      const NewTask = await addTask(boardId, posTask); 
        res
        .status(201)
        .json(NewTask);
    } catch (err) {
      res
        .status(err.status)
        .send(err.message)
    }
  });

  router.route('/:boardId/tasks').get(async (req:Request, res:Response) => {
    try {
      const {boardId} = req.params;
      const result = await getTasks(boardId);
        res
         .json(result)
    } catch (err) {
      res
      .status(err.status)
      .send(err.message)
    }
   });
  
   router.route('/:boardId/tasks/:taskId').get(async (req:Request, res:Response) => {
    try {
      const {boardId, taskId} = req.params;
      const result = await getTaskById(boardId,taskId);
      res
        .json(result)
    } catch (err) {
      res
      .status(404)
      .send(err.message)
    }
   });

   router.route('/:boardId/tasks/:taskId').put(async (req:Request, res:Response) => {
    try {
      const {boardId, taskId} = req.params;
      const result = await updateTask (boardId, taskId, req.body);
      res
        .json(result)
    } catch (err) {
      res
      .status(err.status)
      .send(err.message)
    }
   });

   router.route('/:boardId/tasks/:taskId').delete(async (req:Request, res:Response) => {
    try {
      const {boardId, taskId} = req.params;
      await deleteTask (boardId, taskId);
      res
        .status(204)
        .send('The task has been deleted')
    } catch (err) {
      res
      .status(err.status)
      .send(err.message)
    }
   });
  
module.exports = router;