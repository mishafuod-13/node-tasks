import { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { IBoard, IBoardRes } from './boards.model';

import {addBoard, getBoardById, getAllBoards, updateBoardById} from './boards.service'

const router = require('express').Router();

createConnection().then (async ()=> {
  
const entityManager =  getManager();
 

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
})

/*

router.route('/:boardId').get(async (req: Request, res: Response, next:NextFunction ) => {
  try{
    const board:Board[] = await getBoardById(entityManager, req.params['boardId']);
    res.json(board[0]);
  } catch (err) {
    next(err)
  }

});

router.route('/').get(async (__req: Request, res: Response, next:NextFunction ) => {
  try{
    const boards:Array<Board> = await getAllBoards(entityManager);
    res.json(boards);
  } catch (err) {
    next(err)
  }

});

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
});
*/



module.exports = router;