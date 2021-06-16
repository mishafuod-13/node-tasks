"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { BD } = require('../boards/board.memory.repositiry');
const HandleError = require('../middleware/handleerrors');
const { Task } = require('./task.model');
class TasksBD {
    constructor() {
        this.taskrep = {};
    }
    async addTask(boardId, taskoption) {
        const board = await BD.findBoard(boardId);
        const task = new Task(taskoption);
        task.boardId = boardId;
        if (board) {
            if (this.taskrep[boardId] !== undefined) {
                this.taskrep?.[boardId]?.push(task);
            }
            else {
                this.taskrep[boardId] = [task];
            }
            return task;
        }
        throw HandleError.BadReqest;
    }
    async getTasks(boardId) {
        const board = await BD.findBoard(boardId);
        if (!board) {
            throw HandleError.NotFound;
        }
        return this.taskrep[boardId];
    }
    async updateTask(boardId, taskId, options) {
        let result;
        if (typeof this.taskrep[boardId] !== 'undefined') {
            const board = this.taskrep[boardId];
            board.forEach(item => {
                if (item.id === taskId) {
                    item.updateTask(options);
                    result = item;
                }
            });
        }
        if (result) {
            return result;
        }
        throw HandleError.NotFound;
    }
    async deleteTask(boardId, taskId) {
        const board = this.taskrep[boardId];
        let res;
        if (typeof this.taskrep[boardId] !== 'undefined') {
            board?.forEach((task, index) => {
                if (task.id === taskId) {
                    res = index;
                }
            });
            if (typeof res === 'number') {
                board?.splice(res, 1);
                return "OK";
            }
        }
        throw HandleError.NotFound;
    }
    async getTaskById(boardId, taskId) {
        const tasks = await this.getTasks(boardId);
        let result;
        if (typeof tasks !== 'undefined') {
            tasks.forEach(item => {
                if (item.id === taskId) {
                    result = item;
                }
            });
        }
        if (!result) {
            throw HandleError.NotFound;
        }
        return result;
    }
}
const TaskBD = new TasksBD();
module.exports.TaskBD = TaskBD;
