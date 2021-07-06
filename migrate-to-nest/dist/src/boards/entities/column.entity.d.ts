import { BaseEntity } from "typeorm";
export declare class Columns extends BaseEntity {
    id: string;
    title: string;
    order: number;
    boardId: string;
    constructor({ id, title, order, boardId }?: {
        id?: string;
        title?: string;
        order?: number;
        boardId?: string;
    });
}
