"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { addTask, getTasks, getTaskById, updateTask, deleteTask } = require('./task.service');
router.route('/:boardId/tasks').post(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const posTask = req.body;
        const NewTask = await addTask(boardId, posTask);
        res
            .status(201)
            .json(NewTask);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId/tasks').get(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const result = await getTasks(boardId);
        res
            .json(result);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId/tasks/:taskId').get(async (req, res, next) => {
    try {
        const { boardId, taskId } = req.params;
        const result = await getTaskById(boardId, taskId);
        res
            .json(result);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId/tasks/:taskId').put(async (req, res, next) => {
    try {
        const { boardId, taskId } = req.params;
        const result = await updateTask(boardId, taskId, req.body);
        res
            .json(result);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId/tasks/:taskId').delete(async (req, res, next) => {
    try {
        const { boardId, taskId } = req.params;
        await deleteTask(boardId, taskId);
        res
            .status(204)
            .send('The task has been deleted');
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;
