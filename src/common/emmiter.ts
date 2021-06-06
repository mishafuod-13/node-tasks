


  const modulr = require('../resources/tasks/task.memory.repository.ts')
  console.log (modulr)
  const TaskBD = modulr.TaskBD
  console.log ()
  const EventEmitter = require('events');
  class MyEmitter extends EventEmitter {};
  var handleEventEmitter = new MyEmitter ();

  console.log ('!!!!!!!!!1111111');
  handleEventEmitter['on']('delete_Board', async (boardId:string):Promise<void> => {
    console.log (boardId)
    const task = TaskBD['taskrep'];
    console.log (TaskBD) 
    console.log (TaskBD, boardId,task)
 
  }
  )

  module.exports.handleEventEmitter = handleEventEmitter;