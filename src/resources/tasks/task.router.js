const router = require('express').Router();
const {addTask} = require('./task.service.js');
const {getTasks} = require('./task.service.js');
const {getTaskById} = require('./task.service.js');
const {updateTask} = require('./task.service.js')

router.route('/:boardId/tasks').post(async (req, res) => {
    try {
      const NewTask = await addTask(req.params.boardId, req.body); 
        res
        .status(201)
        .json(NewTask);
    } catch (err) {
      res
        .status(400)
        .send(err.message)
    }
  });

  router.route('/:boardId/tasks').get(async (req, res) => {
    try {
      const result = await getTasks(req.params.boardId);
        res
         .json(result)
    } catch (err) {
      res
      .status(401)
      .send(err.message)
    }
   });
  
   router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
    try {
      const result = await getTaskById(req.params.boardId,req.params.taskId);
      res
        .json(result)
    } catch (err) {
      res
      .status(404)
      .send(err.message)
    }
   });

   router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
    try {
      const result = await updateTask (req.params.boardId, req.params.taskId, req.body);
      res
        .json(result)
    } catch (err) {
      res
      .status(404)
      .send(err.message)
    }
   });



module.exports = router;