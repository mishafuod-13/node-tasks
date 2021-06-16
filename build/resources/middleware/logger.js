"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname + '/logs', 'access.log'), { flags: 'a' });
const reqAccessLog = morgan('combined', {
    stream: accessLogStream
});
const errorHandling = (err, _req, res, next) => {
    const errorLogStream = fs.createWriteStream(path.join(__dirname + '/logs', 'error.log'), { flags: 'a' });
    if (err.name !== 'HandleError') {
        const templstr = `UnhandledError:${err}; :: Process Exit with code: 1 :: Message:${err.message} :: Date:${new Date(Date.now())}\n`;
        errorLogStream.write(templstr);
        process.stdout.write(templstr);
        return;
    }
    const templstr = `HandleError:${err}; ::Response Status Code:${err.status} :: Message:${err.message}\n`;
    errorLogStream.write(templstr);
    process.stdout.write(templstr);
    res.status(err.status).send(err.message);
    next();
};
module.exports = { reqAccessLog, errorHandling };
