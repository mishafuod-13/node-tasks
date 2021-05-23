const {TaskBD} = require('../tasks/task.memory.repository')

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

module.exports.userUpdateDelete  = userUpdateDelete;