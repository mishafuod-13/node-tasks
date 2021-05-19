const {BD} = require('../boards/board.memory.repositiry');
const {Task} = require('./task.model');

class TasksBD {
    constructor() {
        this.BoardBD = BD;
        this.taskrep = {};
    }

    addTask (boardId, taskoption) {
      const board  = BD.findBoard(boardId);
      const tasks = this.taskrep[boardId];
      const task = new Task (taskoption);
      task.boardId = boardId;
      if (board) {
        if (tasks) {
          tasks.push(task);
        } else {
          this.taskrep[boardId] = [task]; 
        }
        return task;
      }
      return Error ("Bad reqest");
    }

    getTasks (boardId) {
       const board  = BD.findBoard(boardId);
       if (!board){
         throw Error ('Access token is missing or invalid')
       }
       return this.taskrep[boardId]
    }

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

const TaskBD = new TasksBD ();

module.exports.TaskBD = TaskBD;