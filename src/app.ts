import { NextFunction, Request, Response } from "express";

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/boards.router');
const taskRouter =  require('./resources/tasks/task.router');

const App = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

App.use(express.json());

App.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

App.use('/', (req: Request, res: Response, next: NextFunction ) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

App.use('/users', userRouter);
App.use ('/boards', boardRouter);
App.use ('/boards', taskRouter);

module.exports = App;