import { NextFunction, Request, Response } from "express";


const express = require('express');
const {reqAccessLog, errorHandling} = require('./resources/middlewar/logger')
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/boards.router');
const taskRouter =  require('./resources/tasks/task.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));


app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (_err:Error, req: Request, res: Response, next: NextFunction ) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(reqAccessLog);
app.use (errorHandling)

app.use('/users', userRouter);
app.use ('/boards', boardRouter);
app.use ('/boards', taskRouter);


app.use(errorHandling)

module.exports = app;