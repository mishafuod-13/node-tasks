import { Request, Response, NextFunction} from 'express';
// import {User} from './user.model'
import {createConnection, getManager} from "typeorm";
import "reflect-metadata";


const router = require('express').Router();

const { createNewUser, 
  getAllUsers, 
  deleteUserById, 
  updateUserById, 
  getUserById 
} =  require ('./user.service');

createConnection().then (async ()=> {
  
const entityManager = getManager();


  router.route('/').post(async (req:Request, res:Response, next: NextFunction) => {
    try{
      const result = await createNewUser (entityManager, req.body);
      console.log (result)
      res.status(201).json(result);
    } catch (err) {
      next(err)
    }
  });


  router.route('/').get(async (_req:Request, res:Response, next: NextFunction) => {
  try {
    const users = await getAllUsers(entityManager);
    res.json(users);
  }
  catch (err) {
    next(err)
  }
  });

  router.route('/:userId').delete(async (req:Request, res:Response, next: NextFunction) => {
    try{
    const {userId} = req.params;
    const result = await deleteUserById(entityManager, userId);
    if (result === "OK") {
      res
      .status(204)
      .send("The user has been deleted")
    }
   } catch(err){
   next(err);
  }
 });

 router.route('/:userId').put(async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {userId} = req.params;
    const result = await updateUserById(entityManager, userId, req.body);
    res.json(result)
  } catch (err) {
    next(err);
  }
 });

 router.route('/:userId').get(async (req:Request, res:Response, next: NextFunction) => {
 try{
  const {userId} = req.params;
  const result = await getUserById(entityManager, userId);
  res.json(result);
 } catch (err){
   next(err);
 }
});
})

module.exports = router;