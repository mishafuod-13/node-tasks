/**
 * @module BD
 * @description imports the model DB Board entity
 */
const {BD} = require('../boards/board.memory.repositiry');

/**
 * @module Task
 * @description imports Task- model
 */
const {Task} = require('./task.model');

class TasksBD {
  /**
    * @requires BD
    * @requires Task
    * @this TasksBD
     * Create a TasksBD entity.
     * @param {object} [this.taskrep={}] -  an object with keys boardId = [Taskmodel]
     */
    constructor() {
        this.taskrep = {};
    }

    /** 
     * Сreates a new task entity and puts it in the storage by key
     * @param {string} boardId  - id/key 
     * @param {object} taskoption - Object with options for new task
      * @returns {object|Error} return new task-object or error if input values are incorrect.
      */
    addTask (boardId, taskoption) {
      const board  = BD.findBoard(boardId);
      const task = new Task (taskoption);
      task.boardId = boardId;
      if (board) {
        if (this.taskrep[boardId]) {
          this.taskrep[boardId].push(task);
        } else {
          this.taskrep[boardId] = [task]; 
        }
        return task;
      }
      return Error ("Bad reqest");
    }

    /** 
       * Searches all task by boardId
       * @param {string} boardId - boardId by which to search.
       * @returns {Array|Error} - returns an array with task entities or error if boardId are incorrect/not exist.
       */
    getTasks (boardId) {
       const board  = BD.findBoard(boardId);
       if (!board){
         throw Error ('Access token is missing or invalid')
       }
       return this.taskrep[boardId]
    }

    /** 
     * Update task by boardId & taskId
     * @param {string} boardId  - id/key for this.taskrep (see above) 
     * @param {string} taskId  - taskId
     * @param {object} options - Object with options for updated task
     * @returns {object|undefined} return new task-object or undefined if input values are incorrect.
    */
    updateTask (boardId, taskId, options) {
      let result
        this.taskrep[boardId].forEach(item => {
          if (item.id === taskId) {
            item.updateTask(options);
            result = item;
          }
        });
      return result;
    }

    /** 
     * Delete task by boardId & taskId
     * @param {string} boardId  - id/key for this.taskrep (see above) 
     * @param {string} taskId  - taskId
     * @returns {string|Error} - if the operation was successful, otherwise an error
    */
    deleteTask(boardId, taskId){
      const board = this.taskrep[boardId]
      let res;
      board.forEach((task, index) => {
        if(task.id === taskId){
          res = index;
        }
      });
      if (typeof res === 'number') {
        board.splice(res,1);
        return "OK"
      }
      throw Error ("Access token is missing or invalid");
    }

    /** 
     * Find & return task by boardId & taskID
     * @param {string} boardId  - id/key for this.taskrep (see above) 
     * @param {string} taskId  - taskId
     * @returns {object|Error|undefined} - if the operation was successful, otherwise an error or undefined
    */
    getTaskById (boardId, taskId) {
       const tasks = this.getTasks(boardId);
       let result; 
       tasks.forEach(item => {
         if (item.id === taskId){
             result = item;
         }
       })
        if (!result) {
            throw Error ('Access token is missing or invalid')
        }
        return result;
    }
}

/** @constant {object} TaskBD - creates an instance of the class TasksBD */
const TaskBD = new TasksBD ();

/**
 * Export TaskBD module
 * @module TaskBD
 */
module.exports.TaskBD = TaskBD;