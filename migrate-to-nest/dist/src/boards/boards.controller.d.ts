import { BoardsService } from './boards.service';
import { IBoardRes } from './interfaces/board-res.interface';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(createBoardDto: IBoardRes): Promise<IBoardRes>;
    findAll(): Promise<IBoardRes[]>;
    findOne(id: string): Promise<IBoardRes>;
    update(id: string, updateBoardDto: IBoardRes): Promise<IBoardRes>;
    remove(id: string): Promise<"OK">;
}
