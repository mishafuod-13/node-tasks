const router = require('express').Router();
const {addTask} = require('./task.service');
const {getTasks} = require('./task.service');
const {getTaskById} = require('./task.service');
const {updateTask} = require('./task.service');
const {deleteTask} = require('./task.service')

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

   router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
    try {
      await deleteTask (req.params.boardId, req.params.taskId);
      res
        .status(204)
        .send('The task has been deleted')
    } catch (err) {
      
      res
      .status(401)
      .send(err.message)
    }
   });
  



module.exports = router;