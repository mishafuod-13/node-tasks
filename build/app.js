"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const { reqAccessLog, errorHandling } = require('./resources/middleware/logger');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/boards.router');
const taskRouter = require('./resources/tasks/task.router');
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use(reqAccessLog);
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);
app.use(errorHandling);
process.on('uncaughtException', async (err) => {
    await errorHandling(err);
    process.exit(1);
});
process.on('unhandledRejection', (rs, prom) => {
    prom.catch((err) => {
        errorHandling(err, rs);
        process.exit(1);
    });
});
module.exports = app;
