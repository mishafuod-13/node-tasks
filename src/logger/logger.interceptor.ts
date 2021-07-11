import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IReqLog } from './interfaces/req-log.interfaces';
import { IResLog } from './interfaces/res-log.interfaces';
import * as path from 'path';
import * as fs from  'fs'


@Injectable()
export class LoggingInterceptor implements NestInterceptor {

  async intercept(context: ExecutionContext, next: CallHandler):Promise<Observable<CallHandler>> {
    const accessLogStream = fs.createWriteStream(path.join(`${__dirname}`, 'access.log'), {flags: 'a+'});
    const templatereq = [];
    const templateres = [];

    const pusher = (object:IReqLog|IResLog, temp:Array<String> ):void => {
        for (const [key, value] of Object.entries(object)) {
            if (typeof value === 'object') {
                pusher(value, temp)
                continue;  
            }
            temp.push(`${key.toString()}::${value.toString()}`);
          }

    }
    const ctxa = context.getArgs();
    const now = Date.now();
    
    let {headers, url, method, time=new Date(now) } = ctxa[0];
    let {sendDate, statusCode} = ctxa[1]
    pusher ({headers, url, method, time}, templatereq)
    pusher ({sendDate, statusCode}, templateres)
    accessLogStream.write('REQUEST :: '+ templatereq.join(' || ')+'\n');
    accessLogStream.write('RESPONSE :: '+ templateres.join(' || ')+'\n');
    
    return next.handle() 
 }
 
}


