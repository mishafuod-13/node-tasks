interface IHeaders{
    host:string;
    authorization: string;
    connection:string;
}

export interface IReqLog {
    url:string;
    headers:IHeaders;
    method:string;
    time:Date;
}