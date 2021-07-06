import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { Columns } from './entities/column.entity';
import { IBoardRes } from './interfaces/board-res.interface';
export declare class BoardsService {
    private boardsRepository;
    private columnRepository;
    constructor(boardsRepository: Repository<Board>, columnRepository: Repository<Columns>);
    wrap(boardId: string): Promise<IBoardRes>;
    findAll(): Promise<IBoardRes[]>;
    update(id: string, boardDto: IBoardRes): Promise<IBoardRes>;
    create(createBoardDto: IBoardRes): Promise<IBoardRes>;
    findOne(id: string): Promise<IBoardRes>;
    remove(id: string): Promise<'OK'>;
}
