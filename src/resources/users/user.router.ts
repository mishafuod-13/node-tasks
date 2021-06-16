import { Request, Response, NextFunction} from 'express';
import {User} from './user.model'
import {createConnection} from "typeorm";
import "reflect-metadata";

const router = require('express').Router();
//const {createUser } =  require ('./user.service');


createConnection().then (async connection => {

  const userRepository = await connection.getRepository(User)

  router.route('/').post(async (req:Request, res:Response, next: NextFunction) => {
    try{
      console.log ( type of req.body.id)
      const newUser = userRepository.create(req.body);
      userRepository.save(newUser)
      res.status(201).json(newUser);
    } catch (err) {
      next(err)
    }
  });
})

/*
router.route('/').get(async (_req:Request, res:Response, next: NextFunction) => {
  try{
    const users = await getAll();
    res.json(users);
  }
  catch (err) {
    next(err)
  }
});



router.route('/:userId').get(async (req:Request, res:Response, next: NextFunction) => {
 try{
  const {userId} = req.params;
  const result = await getUser(userId);
  res.json(result);
 } catch (err){
   next(err);
 }
});

router.route('/:userId').put(async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {userId} = req.params;
    const result = await updateUser(userId, req.body);
    res.json(result)
  } catch (err) {
    next(err);
  }
 });

 */




//router.route('/:userId').delete(async (req:Request, res:Response, next: NextFunction) => {
//   try{
// //   const {userId} = req.params;
 //   const result = await deleteUser(userId);
 //   if (result === "OK") {
//      res
 //     .status(204)
//      .send("The user has been deleted")
 //   }
 //  } catch(err){
   //  next(err);
 //  }
//});

module.exports = router;