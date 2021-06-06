
const fs = require ('fs');
const morgan = require('morgan');
const path = require('path');


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a+'});

const reqAccessLog = morgan('combined', {
    stream:accessLogStream,
}) 

const errorLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), {flags: 'a+'});

const errorLog = 

module.exports.reqAccessLog = reqAccessLog;