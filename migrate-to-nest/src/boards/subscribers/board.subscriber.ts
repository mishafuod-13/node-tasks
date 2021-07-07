import {Connection, EntitySubscriberInterface, EventSubscriber,RemoveEvent} from 'typeorm'
import { Board } from '../entities/board.entity';
import { Task }  from '../../tasks/entities/task.entity';
import Memory from '../../../common/delete.memory'

@EventSubscriber()
export class BoardSubscriber implements EntitySubscriberInterface<Board> {
    constructor(connection: Connection) {
        connection.subscribers.push(this);
      }

    listenTo():typeof Board {
        return Board;
    }

    async beforeRemove(event: RemoveEvent<Board>):Promise<void> {
        const id = Memory.boardId;
        console.log(id, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        if (id !== null) {
          await event.manager.update(Task, {boardId:id}, {boardId:null})
        }     
 
     }

}