import { Connection, EntitySubscriberInterface, RemoveEvent } from 'typeorm';
import { Board } from '../entities/board.entity';
export declare class BoardSubscriber implements EntitySubscriberInterface<Board> {
    constructor(connection: Connection);
    listenTo(): typeof Board;
    beforeRemove(event: RemoveEvent<Board>): Promise<void>;
}
