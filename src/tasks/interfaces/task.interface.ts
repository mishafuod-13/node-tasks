export interface ITask {
    id:string;
    title?:string;
    order?:number;
    description?:string;
    userId?:string|null;
    columnId?:string|null;
    boardId?:string|null;
}