/**
 * Import TaskBD -entity
 * @module TaskBD
 */
const {TaskBD} = require('../tasks/task.memory.repository')

/** @function userUpdateDelete */
 /**
  * Updates tasks after deleting a User object
  * @function
  * @requires TaskBD
  * @global
  * @name userUpdateDelete 
  * @param {string} userId - userId
  * @returns {undefined}
 */
async function userUpdateDelete (userId) {
  const boards =  Object.values(TaskBD.taskrep);
  boards.forEach( task => {
   task.forEach(i => {
        if (i.userId === userId ) {
            i.deleteUserId();
        }
    });
  });
};


/**
 * Export method
 * @module userUpdateDelete
 */
module.exports.userUpdateDelete  = userUpdateDelete;