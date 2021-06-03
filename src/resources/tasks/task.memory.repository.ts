import {ITask} from './task.model';

const {BD} = require('../boards/board.memory.repositiry');

const {Task} = require('./task.model');

export interface ITaskrep {
  [boardId:string]: Array<ITask>
}

class TasksBD {

  taskrep: ITaskrep;

    constructor() {
        this.taskrep = {};
    }

    async addTask (boardId:string, taskoption:ITask) {
      const board  = await BD.findBoard(boardId);
      const task = new Task (taskoption);
      task.boardId = boardId;
      if (board) {
        if (this.taskrep[boardId] !== undefined) {
          this.taskrep?.[boardId]?.push(task)
        } else {
          this.taskrep[boardId] = [task]; 
        }
        return task;
      }
      return Error ("Bad reqest");
    }

    async getTasks (boardId:string) {
       const board  = await BD.findBoard(boardId);
       if (!board){
         throw Error ('Access token is missing or invalid')
       }
       return this.taskrep[boardId]
    }

    updateTask (boardId:string, taskId:string, options:ITask) {
      let result;
      if (typeof this.taskrep[boardId] !== 'undefined') {
        const board = this.taskrep[boardId] as Array<ITask>
        board.forEach(item => {
          if (item.id === taskId) {
            item.updateTask(options);
            result = item;
          }
        });
      }

      return result;
    }


    deleteTask(boardId:string, taskId:string){
      const board = this.taskrep[boardId]
      let res;
      if (typeof this.taskrep[boardId] !== 'undefined') {
        board?.forEach((task, index) => {
          if(task.id === taskId){
            res = index;
          }
        });
        if (typeof res === 'number') {
          board?.splice(res,1);
          return "OK"
        }
      }
      throw Error ("Access token is missing or invalid");
    }


    async getTaskById (boardId:string, taskId:string) {
       const tasks = await this.getTasks(boardId);
       let result;
       if (typeof tasks !== 'undefined') {
       tasks.forEach(item => {
         if (item.id === taskId){
             result = item;
         }
       })
      }
      if (!result) {
          throw Error ('Access token is missing or invalid')
      }
      return result;
    }
}


const TaskBD = new TasksBD ();


module.exports.TaskBD = TaskBD;