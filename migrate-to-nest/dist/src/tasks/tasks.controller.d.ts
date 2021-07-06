import { TasksService } from './tasks.service';
import { ITask } from './interfaces/task.interface';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    create(id: string, createTaskDto: ITask): Promise<ITask>;
    find(boardId: string): Promise<ITask[]>;
    findOne(boardId: string, taskId: string): Promise<ITask>;
    update(boardId: string, taskId: string, updateTaskDto: ITask): Promise<ITask>;
    remove(taskId: string): Promise<"OK">;
}
