import {Request, Response, NextFunction} from 'express';
import { HandleError} from './handleerrors'
const fs = require ('fs');
const morgan = require('morgan');
const path = require('path');



const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

const reqAccessLog = morgan('combined', {
    stream:accessLogStream,
}) 

const errorLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), {flags: 'a'});

const errorHandling = (err: HandleError, _req: Request, res: Response, next: NextFunction) => {
    if (err.status){
        errorLogStream.write(`HandleError:${err}; Status Code:${err.status} Message:${err.message}\n`);
        res.status(err.status).send(err.message);
    } else {
        errorLogStream.write(`UnhandledError:${err}; Status Code:500 Message:${err.message}\n`);
        res.status(500).send(err.message);
    }
    next()
  }
  

module.exports = {reqAccessLog, errorHandling};