import { Request, Response, NextFunction } from 'express';

import { IBoard } from './boards.model';

const router = require('express').Router();

const { getAll, 
  addBoard, 
  getBoard, 
  updateBoard, 
  deleteBoard
 } = require('./boards.service');


router.route('/').get(async (__req: Request, res: Response, next:NextFunction ) => {
  try{
    const boards:Array <IBoard> = await getAll();
    res.json(boards);
  } catch (err) {
    next(err)
  }

});

router.route('/:boardId').get(async (req:Request, res:Response, next:NextFunction) => {
  try {
    const result = await getBoard(req.params['boardId']);
    if (result)  {
      res
       .json(result)
    }
  } catch (err) {
    next(err)
  }
 });

 router.route('/:boardId').put(async (req:Request, res:Response, next: NextFunction) => {
  const result = await updateBoard(req.params['boardId'], req.body);
    try{
      res.json(result)
    } catch (err) {
      next(err)
    }
});

router.route('/').post(async (req:Request, res: Response, next:NextFunction) => {
  try {
    const NewBoard = await addBoard(req.body); 
      res
      .status(201)
      .json(NewBoard);
  } catch (err) {
    next(err);
  }
});

router.route('/:boardId').delete(async (req:Request, res:Response, next: NextFunction) => {
  try {
  const result:string = await deleteBoard(req.params['boardId']);
    if (result === "OK") {
      res
      .status(204)
      .send("The board has been deleted");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;