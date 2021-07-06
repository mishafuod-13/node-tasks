import { BaseEntity } from 'typeorm';
import { ITask } from '../interfaces/task.interface';
export declare class Task extends BaseEntity {
    id: string;
    title?: string;
    order?: number;
    description?: string;
    userId: string | null;
    columnId: string | null;
    boardId: string | null;
    constructor({ id, title, order, description, userId, columnId, boardId, }?: ITask);
}
