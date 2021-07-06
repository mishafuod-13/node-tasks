import { BoardsService } from './boards.service';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {IBoardRes} from './interfaces/board-res.interface'


@Controller('/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto:IBoardRes) {   
  return this.boardsService.create(createBoardDto);
  }

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: IBoardRes) {
    return this.boardsService.update(id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardsService.remove(id);
  }
}
/*

router.route('/').post(async (req:Request, res: Response, next:NextFunction) => {
  try {
    const NewBoard:IBoard|undefined = await addBoard(entityManager, req.body); 
      res
      .status(201)
      .json(NewBoard);
  } catch (err) {
    next(err);
  }
});


router.route('/:boardId').get(async (req: Request, res: Response, next:NextFunction ) => {
  try{
    const board:IBoardRes = await getBoardById(entityManager, req.params['boardId']);
    res.json(board);
  } catch (err) {
    next(err)
  }

});

router.route('/').get(async (__req: Request, res: Response, next:NextFunction ) => {
  try{
    const boards = await getAllBoards(entityManager);
    res.json(boards);
  } catch (err) {
    next(err)
  }
})

router.route('/:boardId').put(async (req:Request, res:Response, next: NextFunction) => {
  const result = await updateBoardById (entityManager, req.params['boardId'], req.body);
    try{
      res.json(result)
    } catch (err) {
      next(err)
    }
});


router.route('/:boardId').delete(async (req:Request, res:Response, next: NextFunction) => {
  try {
  const result:string = await deleteBoardById(entityManager, req.params['boardId']);
    if (result === "OK") {
      res
      .status(204)
      .send("The board has been deleted");
    }
  } catch (err) {
    next(err);
  }
});*/
