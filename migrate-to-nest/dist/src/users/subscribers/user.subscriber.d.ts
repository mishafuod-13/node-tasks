import { Connection, EntitySubscriberInterface, RemoveEvent } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(connection: Connection);
    listenTo(): typeof User;
    beforeRemove(event: RemoveEvent<User>): Promise<void>;
}
