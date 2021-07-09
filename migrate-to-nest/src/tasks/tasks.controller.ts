import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './interfaces/task.interface';
import { LoginGuard } from 'src/guards/login.guard';

@Controller('/boards')
@UseGuards(LoginGuard)
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post('/:boardId/tasks')
  create(@Param('boardId') id: string, @Body() createTaskDto:ITask) {
  return this.taskService.create(id, createTaskDto);
  }

  @Get('/:boardId/tasks')
  find(@Param('boardId') boardId: string) {
    return this.taskService.find(boardId);
  }

  @Get('/:boardId/tasks/:taskId')
  findOne(@Param('boardId') boardId: string, @Param('taskId') taskId: string ) {
    return this.taskService.findOne(boardId, taskId);
  }

  @Put('/:boardId/tasks/:taskId')
  update(@Param('boardId') boardId: string, @Param('taskId') taskId: string, @Body() updateTaskDto:ITask) {
    return this.taskService.update(boardId, taskId, updateTaskDto);
  }

  @Delete('/:boardId/tasks/:taskId')
  remove( @Param('taskId') taskId: string) {
    return this.taskService.remove(taskId);
  }
}
