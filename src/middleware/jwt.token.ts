import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  JWT_SECRET_KEY  from '../common/config';

const HandleError = require('./handleerrors');

function checkAccessToken(req: Request, _res: Response, next: NextFunction) {
    if (req.url === '/' || req.url === '/login' || req.url === '/doc'){
        return next();
    }
    const authHeader = req.headers.authorization;
        if (authHeader !== undefined) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
          throw  HandleError.Unauthorized
        }
        jwt.verify(token, String(JWT_SECRET_KEY));
        return next();
        }
     throw  HandleError.Unauthorized   

}

module.exports = checkAccessToken 