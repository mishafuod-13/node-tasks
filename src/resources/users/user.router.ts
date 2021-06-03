import { Request, Response } from 'express';

const router = require('express').Router();
const {
  getAll,
  createNewUser,
  getUser,
  deleteUser,
  updateUser 
} =  require ('./user.service');

router.route('/').get(async (_req:Request, res:Response) => {
  const users = await getAll();
  res.json(users);
});

router.route('/:userId').get(async (req:Request, res:Response) => {
const {userId} = req.params;
 const result = await getUser(userId);
 if (result) {
   res.json(result)
 } else {
  res
    .status(404)
    .send("User not found")
 }
});

router.route('/:userId').put(async (req:Request, res:Response) => {
  const {userId} = req.params;
  const result = await updateUser(userId, req.body);
  if (result) {
    res.json(result)
  } else {
   res
     .status(400)
     .send("Bad reqest")
  }
 });

router.route('/').post(async (req:Request, res:Response) => {
  const newUser = await createNewUser(req.body); 
  res.status(201).json(newUser);
});

router.route('/:userId').delete(async (req:Request, res:Response) => {
   const {userId} = req.params;
   const result = await deleteUser(userId);
   if (result === "OK") {
     res
     .status(204)
     .send("The user has been deleted")
   } else {
     res
      .status(401)
      .send("Access token is missing or invalid")
   }
});

module.exports = router;