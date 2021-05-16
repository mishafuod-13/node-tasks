const router = require('express').Router();
const {getAll} = require('./boards.service.js');
const {addBoard} = require('./boards.service.js');
const {getBoard} = require('./boards.service.js');
const {updateBoard} = require('./boards.service.js');
const {deleteBoard} = require('./boards.service.js');

router.route('/').get(async (req, res) => {
  const boards = await getAll();
  res.json(boards);
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const result = await getBoard(req.params.boardId);
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

 router.route('/:boardId').put(async (req, res) => {
  const result = await updateBoard(req.params.boardId, req.body);
  if (result) {
    res.json(result)
  } else {
   res
     .status(400)
     .send("Bad reqest")
  }
});

router.route('/').post(async (req, res) => {
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

router.route('/:boardId').delete(async (req, res) => {
  try {
  const result = await deleteBoard(req.params.boardId);
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