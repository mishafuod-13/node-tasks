const router = require('express').Router();
const {getAll} = require('./user.service');
const {getUser} = require('./user.service');
const {createNewUser} = require('./user.service');
const {deleteUser} = require('./user.service');
const {updateUser} = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await getAll();
  res.json(users);
});

router.route('/:userId').get(async (req, res) => {
 const result = await getUser(req.params.userId);
 if (result) {
   res.json(result)
 } else {
  res
    .status(404)
    .send("User not found")
 }
});

router.route('/:userId').put(async (req, res) => {
  const result = await updateUser(req.params.userId, req.body);
  if (result) {
    res.json(result)
  } else {
   res
     .status(400)
     .send("Bad reqest")
  }
 });

router.route('/').post(async (req, res) => {
  const newUser = await createNewUser(req.body); 
  res.status(201).json(newUser);
});

router.route('/:userId').delete(async (req, res) => {
   const result = await deleteUser(req.params.userId);
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
