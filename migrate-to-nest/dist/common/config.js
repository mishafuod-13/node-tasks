"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
const PATH = require('path');
dotenv.config({
    path: PATH.join(__dirname, '../../.env')
});
exports.default = {
    PORT: process.env['PORT'],
    HOST: process.env['HOST'],
    NODE_ENV: process.env['NODE_ENV'],
    MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
    JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
    AUTH_MODE: process.env['AUTH_MODE'] === 'false'
};
//# sourceMappingURL=config.js.map