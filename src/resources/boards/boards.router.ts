import { Request, Response } from 'express';

import { IBoard } from './boards.model';

const router = require('express').Router();

const { getAll, 
  addBoard, 
  getBoard, 
  updateBoard, 
  deleteBoard
 } = require('./boards.service');


router.route('/').get(async (__req: Request, res: Response) => {
  const boards:Array <IBoard> = await getAll();
  res.json(boards);
});

router.route('/:boardId').get(async (req:Request, res:Response) => {
  try {
    const result = await getBoard(req.params['boardId']);
    if (result)  {
      res
       .json(result)
    }
  } catch (err) {
    res
    .status(404)
    .send(err.message)
  }
 });

 router.route('/:boardId').put(async (req:Request, res:Response) => {
  const result = await updateBoard(req.params['boardId'], req.body);
  if (result) {
    res.json(result)
  } else {
   res
     .status(400)
     .send("Bad reqest")
  }
});

router.route('/').post(async (req:Request, res: Response) => {
  try {
    const NewBoard = await addBoard(req.body); 
      res
      .status(201)
      .json(NewBoard);
  } catch (err) {
    res
      .status(400)
      .send(err.message)
  }
});

router.route('/:boardId').delete(async (req:Request, res:Response) => {
  try {
  const result:string = await deleteBoard(req.params['boardId']);
    if (result === "OK") {
      res
      .status(204)
      .send("The board has been deleted");
    }
  } catch (err) {
    res
    .status(404)
    .send(err.message)
  }
});

module.exports = router;