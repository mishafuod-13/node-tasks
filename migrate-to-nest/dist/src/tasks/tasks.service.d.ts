import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { ITask } from './interfaces/task.interface';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    find(boardId: string): Promise<ITask[]>;
    update(boardId: string | undefined, taskId: string | undefined, updateTaskDto: ITask): Promise<ITask>;
    create(boardIds: string, taskoption: ITask): Promise<ITask>;
    findOne(boardId: string, taskId: string): Promise<ITask>;
    remove(taskId: string): Promise<'OK'>;
}
