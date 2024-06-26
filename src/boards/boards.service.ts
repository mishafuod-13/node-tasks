import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { Columns } from './entities/column.entity';
import { IBoardRes } from './interfaces/board-res.interface';
import { IColumnReq } from './interfaces/column-req.inteface';
import Memory from '../../common/delete.memory';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
    @InjectRepository(Columns)
    private columnRepository: Repository<Columns>,
  ) {}

  private async wrap(boardId: string): Promise<IBoardRes> {
    const boardres = await this.boardsRepository.findOneOrFail({
      where: {
        id: boardId,
      },
    });
    if (boardres) {
      const columnsRes = await this.columnRepository.find({
        where: {
          boardId: boardId,
        },
      });
      if (columnsRes) {
        const columns = columnsRes.map((col) => {
          const { id, title, order } = col;
          return { id, title, order };
        });
        const { ...res } = { columns, ...boardres };
        return { ...res };
      }
    }
    throw new NotFoundException();
  }

  async findAll(): Promise<IBoardRes[]> {
    const boardrep = await this.boardsRepository.find();
    const wrapper = async (boardId: Board['id']) => this.wrap(boardId);
    const res = boardrep.map((board) => wrapper(board.id));
    return Promise.all(res);
  }

  async update(id: string, boardDto: IBoardRes): Promise<IBoardRes> {
    const check = await this.boardsRepository.findOneBy({ id: id });
    if (check) {
      const res = await this.boardsRepository
        .update(id, { title: boardDto.title })
        .then(() => this.wrap(id));
      return res;
    }
    throw new NotFoundException();
  }

  async create(createBoardDto: IBoardRes): Promise<IBoardRes> {
    const board = new Board({ title: createBoardDto.title });
    const boardId = board.id;
    await this.boardsRepository.save(board);
    const columns: Array<IColumnReq> = [];
    if (Array.isArray(createBoardDto.columns)) {
      createBoardDto.columns.forEach((col) => {
        const { ...items } = { boardId, ...col };
        const column = new Columns({ ...items });
        this.columnRepository.save(column);
        const { id, title, order }: IColumnReq = column;
        columns.push({ id, title, order });
      });
    }
    const { ...res } = { ...board, columns };
    return { ...res };
  }

  async findOne(id: string): Promise<IBoardRes> {
    const boardres = await this.boardsRepository.findOneBy({ id: id });
    if (boardres) {
      const columnsRes = await this.columnRepository.find({
        where: {
          boardId: id,
        },
      });
      if (columnsRes.length) {
        const columns = columnsRes.map((col) => {
          const { id, title, order } = col;
          return { id, title, order };
        });
        const { ...res } = { columns, ...boardres };
        return { ...res };
      }
    }
    throw new NotFoundException();
  }

  async remove(id: string): Promise<'OK'> {
    const check = await this.boardsRepository.findOneBy({ id: id });
    if (check) {
      Memory.setBoardId(id as string);
      await this.boardsRepository.delete(id);
      await this.columnRepository.delete({ boardId: id });
      return 'OK';
    }
    throw new NotFoundException();
  }
}
