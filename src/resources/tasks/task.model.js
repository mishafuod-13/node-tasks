const { v4: uuidv4 } = require('uuid');

class Task  {
    constructor ({
      id = uuidv4(),
      title = 'AAAtyty',
      order = 0,
      description = 'string',
      userId = null,
      columnId = null,
      boardId = null,
    } = {}) {
      this.id = id;
      this.title = title;
      this.order = order;
      this.description = description;
      this.userId = userId;
      this.columnId = columnId;
      this.boardId = boardId;
    }
}  

module.exports.Task = Task;