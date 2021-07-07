import { Connection, EntitySubscriberInterface, RemoveEvent, InsertEvent } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(connection: Connection);
    listenTo(): typeof User;
    beforeRemove(event: RemoveEvent<User>): Promise<void>;
    beforeInsert(event: InsertEvent<User>): Promise<void>;
}
