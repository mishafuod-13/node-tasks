
export class HandleError extends Error {
   readonly status:number;

   readonly message: string;
    
   readonly name: string;

    constructor (status:number, message:string, name: string) {
        super(name)
        this.name = name,
        this.status = status,
        this.message = message
    }

}

const BadReq:HandleError = new HandleError(400, 'Bad Reqest', 'HandleError');
const NotFound:HandleError = new HandleError(404, 'Not Found','HandleError');
const Unauthorized:HandleError =  new HandleError(401, 'Unauthorized', 'HandleError');
const ServerError:HandleError = new HandleError( 500, 'Internal Server Error', 'HandleError');
const Forbidden:HandleError = new HandleError (403, 'Forbidden', 'HandleError');


export interface IHandleEvent {
    [key:string]: HandleError;

}

module.exports = {
    BadReqest: BadReq,
    NotFound,
    Unauthorized,
    ServerError,
    Forbidden
}