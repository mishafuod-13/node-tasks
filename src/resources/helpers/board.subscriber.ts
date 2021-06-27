import {EventSubscriber, EntitySubscriberInterface, RemoveEvent} from 'typeorm'
import { Board } from '../boards/boards.model';
import {Task} from '../tasks/task.model'
import Memory from './delete.memory'

@EventSubscriber()
export default class BoardSubscriber implements EntitySubscriberInterface<Board> {

    listenTo():typeof Board {
        return Board;
    }

    async beforeRemove(event: RemoveEvent<Board>):Promise<void> {
       const id = Memory.boardId;
       if (id !== null) {
         await event.manager.update(Task, {boardId:id}, {boardId:null})
       }     

    }

}