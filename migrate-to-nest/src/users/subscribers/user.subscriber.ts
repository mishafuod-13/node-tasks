import {Connection, EntitySubscriberInterface, EventSubscriber,RemoveEvent, InsertEvent} from 'typeorm'
//import bcrypt from 'bcrypt'
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
       console.log ("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
       if (id !== null) {
         await event.manager.update(Task, {userId:id}, {userId:null})
       }     

    }

}