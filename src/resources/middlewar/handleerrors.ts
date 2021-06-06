
 export class HandleError extends Error {
    status:number;

    message: string;

    constructor(status:number, message:string){
        super();
        this.status = status,
        this.message = message
    }

}

export interface IHandleEvent {
    [key:string]: HandleError;

}

module.exports = {
    BadReqest: new HandleError(400, "Bad Reqest"),
    NotFound: new HandleError(404, 'Not Found'),
    Unauthorized: new HandleError(401, 'Unauthorized')

} as IHandleEvent;