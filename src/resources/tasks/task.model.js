/**
 * Import uuidv4 module
 * @module uuidv4
 */
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

    /** 
     * Update task if options correct
     * @param {object} options - Object with options
      * @return {object} - return updated task.
      */
    updateTask(options) {
      Object.keys(options).forEach((key) => {
        if (options[key] !== this[key]) {
         this[key] = options[key]; 
        }
      })
      return this;
    }

    /** 
     * Delete this.userId.
     * Called when an User - entity is deleted.
      */
    deleteUserId () {
      this.userId = null;
    }

}  

/**
 * Export the Task-model class.
 * @module Task
 */
module.exports.Task = Task;