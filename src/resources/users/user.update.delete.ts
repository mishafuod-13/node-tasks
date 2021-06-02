
import { ITask } from '../tasks/task.model';

const {TaskBD} = require('../tasks/task.memory.repository.ts')

function userUpdateDelete (userId:string):void {
  const boards:Array<Array<ITask>> =  Object.values(TaskBD.taskrep);
  boards.forEach( (arr:Array<ITask>) => {
   arr.forEach((i:ITask) => {
        if (i.userId === userId ) {
            i.deleteUserId();
        }
    });
  });
};


module.exports.userUpdateDelete  = userUpdateDelete;