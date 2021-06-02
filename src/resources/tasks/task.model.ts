
const { v4: uuidv4 } = require('uuid');

export interface ITask {

  [key:string]:string | number | null| undefined|((options: ITask) => Task)|(() => void);
  id?:string;
  title?:string;
  order?:number;
  description?:string;
  userId?:string|null;
  columnId?:string;
  boardId?:string;
  updateTask(options: ITask): Task;
  deleteUserId(): void;

}



class Task  {
  [key: string]:string|number|null|undefined|((options: ITask) => Task)|(() => void)

  id?:string;

  title?:string;

  order?:number|string;

  description?:string;

  userId?:string|null;

  columnId?:string;

  boardId?: string|null;


    constructor ({
      id = uuidv4(),
      title = 'AAAtyty',
      order = 0,
      description = 'string',
      userId = 'string',
      columnId = 'string',
      boardId = 'string',
    } = {}) {
      this.id = id;
      this.title = title;
      this.order = order;
      this.description = description;
      this.userId = userId;
      this.columnId = columnId;
      this.boardId = boardId;
    }

    updateTask(options:ITask) {
      Object.keys(options).forEach((key:string) => {
        if (options[key] !== this[key]) {
         this[key] = options?.[key]; 
        }
      })
      return this;
    }


    deleteUserId () {
      this.userId = null;
    }

}  

module.exports.Task = Task;