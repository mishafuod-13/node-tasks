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

/*
router.route('/:boardId/tasks').post(async (req:Request, res:Response, next:NextFunction): Promise<void> => {
  try {
    const {boardId} = req.params;
    const taskoption:ITask = req.body
    const nTask = await addTaskByBoardId(entityManager, boardId, taskoption); 
      res
      .status(201)
      .json(nTask);
  } catch (err) {
    next(err)
  }
});

router.route('/:boardId/tasks').get(async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {boardId} = req.params;
    const result = await getTasksByBoardId(entityManager, boardId);
      res
       .json(result)
  } catch (err) {
    next(err);
  }
 });

 router.route('/:boardId/tasks/:taskId').get(async ( req:Request, res:Response, next: NextFunction) => {
  try {
    const {boardId, taskId} = req.params;
    const result = await getTaskByTaskId(entityManager, boardId, taskId);
    res
      .json(result)
  } catch (err) {
    next(err)
  }
 });

 router.route('/:boardId/tasks/:taskId').put(async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {boardId, taskId} = req.params;
    const result = await updateTaskById (entityManager,boardId, taskId, req.body);
    res
      .json(result)
  } catch (err) {
    next(err);
  }
 });

 router.route('/:boardId/tasks/:taskId').delete(async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {taskId} = req.params;
    const result =  await deleteTaskById (entityManager, taskId);
    if (result === "OK") {
      res
      .status(204)
      .send('The task has been deleted')
    }
  } catch (err) {
    next(err);
  }
 });*/