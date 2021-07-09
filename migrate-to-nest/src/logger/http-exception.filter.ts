import { ExceptionFilter, Catch, ArgumentsHost, HttpException, } from '@nestjs/common';
import { Request, Response } from 'express';
import { IResLog } from './interfaces/res-log.interfaces';

import * as path from 'path';
import * as fs from  'fs'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorLogStream = fs.createWriteStream(path.join(`${__dirname}`, 'error.log'), {flags: 'a+'});
    const info = exception.getResponse() as IResLog
    errorLogStream.write(`HTTP-EXCEPTION :: statusCode : ${info.statusCode.toString()} || message : ${info.message.toString()} || sendDate : ${new Date(Date.now())}}\n` )


    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}