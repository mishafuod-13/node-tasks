import {EventSubscriber, EntitySubscriberInterface, RemoveEvent} from 'typeorm'
import { Board } from '../boards/boards.model';
import {Task} from '../tasks/task.model'
import {Memory} from './delete.memory'

@EventSubscriber()
export class BoardSubscriber implements EntitySubscriberInterface<Board> {

    listenTo() {
        return Board;
    }

    async beforeRemove(event: RemoveEvent<Board>) {
       const id = Memory.boardId;
       if (id !== null) {
         await event.manager.update(Task, {boardId:id}, {boardId:null})
       }     

    }

}