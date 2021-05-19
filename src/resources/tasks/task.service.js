const {TaskBD} = require('./task.memory.repository');

const addTask = (boardId, options)  =>  TaskBD.addTask( boardId,options );
const getTasks = (boardId) => TaskBD.getTasks(boardId);
const getTaskById = (boardId,taskId) => TaskBD.getTaskById(boardId,taskId);
const updateTask = (boardId,taskId,options) => {
    TaskBD.updateTask(boardId,taskId,options);
}

module.exports.updateTask = updateTask;
module.exports.addTask = addTask;
module.exports.getTasks = getTasks;
module.exports.getTaskById = getTaskById;