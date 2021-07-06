import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { Columns } from './entities/column.entity';
import { IBoardRes } from './interfaces/board-res.interface';
import { IColumnReq } from './interfaces/column-req.inteface';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
    @InjectRepository(Columns)
    private columnRepository: Repository<Columns>,
 ) {}

    async wrap(boardId:string):Promise<IBoardRes> {
    const boardres = await this.boardsRepository.findOne(boardId);
    if (boardres) {
    const columnsres = await this.columnRepository.find({boardId: boardId });
      if (columnsres.length) {
        const columns = columnsres.map (col => {
          const {id, title, order} = col;
          return {id, title, order};
        })
        const {...res} = {columns, ...boardres};
        return {...res}
      }
    }
  }

  async findAll(): Promise<IBoardRes[]> {
    const boardrep = await this.boardsRepository.find();
    const wrapper = async(boardId:Board['id']) => this.wrap (boardId);
    const res =  boardrep.map((board) =>  wrapper(board.id))
    return Promise.all(res)
  }

  async update (id: string, boardDto:IBoardRes): Promise<IBoardRes> {
    const res = await this.boardsRepository.update(id, { title: boardDto.title }).then(() => this.wrap (id));
    return res
  }

  async create (createBoardDto: IBoardRes): Promise<IBoardRes> {
    const board = new Board ({title:createBoardDto.title});
    const boardId = board.id;
    await this.boardsRepository.save(board);
    const columns:Array<IColumnReq> = [];
    if (Array.isArray (createBoardDto.columns)) {
    createBoardDto.columns.forEach ((col) => {
      const { ...items} =  {boardId, ...col};
      const column = new Columns({ ...items});
      this.columnRepository.save(column);
      const {id, title, order}:IColumnReq = column
      columns.push({id, title, order});
    })
  }
  const {...res} = {...board, columns}
  return {...res}
  }

  async findOne(id: string): Promise<IBoardRes> {
    const boardres = await this.boardsRepository.findOne(id);
    if (boardres) {
        const columnsres = await this.columnRepository.find({ boardId: id });
        if (columnsres.length) {
        const columns = columnsres.map (col => {
            const {id, title, order} = col;
            return {id, title, order};
        })
        const {...res} = {columns, ...boardres};
        return {...res}
      }
    }
  }

  async remove(id: string): Promise<'OK'> {
    const result = await this.boardsRepository.findOne(id);
    if (result) {
    await this.boardsRepository.delete(id);
    await this.columnRepository.delete ({boardId : id}) 
    return "OK"
    }
  }
}
