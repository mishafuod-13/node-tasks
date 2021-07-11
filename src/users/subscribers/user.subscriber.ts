import {Connection, EntitySubscriberInterface, EventSubscriber,RemoveEvent, InsertEvent} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { User } from '../entities/user.entity';
import { Task }  from '../../tasks/entities/task.entity'
import Memory from '../../../common/delete.memory'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(connection: Connection) {
        connection.subscribers.push(this);
      }

    listenTo():typeof User {
        return User;
    }

    async beforeRemove(event: RemoveEvent<User>):Promise<void> {
       const id = Memory.userId;
       if (id !== null) {
         await event.manager.update(Task, {userId:id}, {userId:null})
       }     

    }

    async beforeInsert(event: InsertEvent<User>):Promise<void> {
      event.entity.password = bcrypt.hashSync(event.entity.password, 10)
    }

}