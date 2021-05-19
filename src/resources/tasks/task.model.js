const { v4: uuidv4 } = require('uuid');

class Task  {
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

    updateTask(options) {
      Object.keys(options).forEach((key) => {
        if (options[key] !== this[key]) {
         this[key] = options[key]; 
        }
      })
      return this;
    }

}  

module.exports.Task = Task;