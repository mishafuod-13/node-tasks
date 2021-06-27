
import {EventSubscriber, EntitySubscriberInterface, RemoveEvent, InsertEvent} from 'typeorm'
import bcrypt from 'bcrypt'
import { User } from '../users/user.model';
import {Task} from '../tasks/task.model'
import Memory from './delete.memory'

@EventSubscriber()
export default class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo():typeof User {
        return User;
    }

    async beforeRemove(event: RemoveEvent<User>):Promise<void> {
       const id = Memory.userId;
       if (id !== null) {
         await event.manager.update(Task, {userId:id}, {userId:null})
       }     

    }

    async beforeInsert(event: InsertEvent<User>) {
      event.entity.password = bcrypt.hashSync(event.entity.password, 10)
    }

}