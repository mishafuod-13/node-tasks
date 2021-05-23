const router = require('express').Router();
const {getAll} = require('./user.service.js');
const {getUser} = require('./user.service.js');
const {switcher} = require('./user.service.js');
const {deleteUser} = require('./user.service.js');
const {updateUser} = require('./user.service.js');

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
  const newUser = await switcher(req.body); 
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
