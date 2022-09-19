import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { ITask } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async find(boardId: string): Promise<ITask[]> {
    if (boardId !== undefined) {
      const tasks = await this.tasksRepository.find({
        where: { boardId: boardId },
      });
      if (tasks.length) {
        return tasks;
      }
    }
    throw new NotFoundException();
  }

  async update(
    boardId: string | undefined,
    taskId: string | undefined,
    updateTaskDto: ITask,
  ): Promise<ITask> {
    const check = await this.tasksRepository.findOneBy({ id: taskId, boardId });
    if (check) {
      await this.tasksRepository.update({ id: taskId, boardId }, updateTaskDto);
      return this.tasksRepository.findOneBy({ id: taskId });
    }
    throw new NotFoundException();
  }

  async create(boardIds: string, taskoption: ITask): Promise<ITask> {
    if (boardIds !== undefined) {
      const option = { ...taskoption, boardId: boardIds };
      const ntask = new Task(option);
      await this.tasksRepository.save(ntask);
      return ntask;
    }
    throw new BadRequestException();
  }

  async findOne(boardId: string, taskId: string): Promise<ITask> {
    const result = await this.tasksRepository.findOneBy({
      boardId: boardId,
      id: taskId,
    });
    if (result) {
      return result;
    }
    throw new NotFoundException();
  }

  async remove(taskId: string): Promise<'OK'> {
    const result = await this.tasksRepository.findOneBy({ id: taskId });
    if (result) {
      await this.tasksRepository.delete(taskId);
      return 'OK';
    }
    throw new NotFoundException();
  }
}
