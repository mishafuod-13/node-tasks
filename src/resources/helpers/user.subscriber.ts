
import {EventSubscriber, EntitySubscriberInterface, RemoveEvent} from 'typeorm'
import { User } from '../users/user.model';
import {Task} from '../tasks/task.model'
import {Memory} from './delete.memory'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo() {
        return User;
    }

    async beforeRemove(event: RemoveEvent<User>) {
       const id = Memory.userId;
       if (id !== null) {
         await event.manager.update(Task, {userId:id}, {userId:null})
       }     

    }

}