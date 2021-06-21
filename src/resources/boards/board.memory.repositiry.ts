import {EntityManager } from 'typeorm';
import { Board, IBoard, IBoardRes } from './boards.model';
import { Columns, IColumnReq } from './column.model';


const HandleError = require('../middleware/handleerrors')

const wrap = async(cb:EntityManager, boardId:string):Promise<IBoardRes> => {
  const boardres = await cb.findOne(Board, boardId);
  if (boardres) {
  const columnsres = await cb.find(Columns, { boardId });
    if (columnsres.length) {
      const columns = columnsres.map (col => {
        const {id, title, order} = col;
        return {id, title, order};
      })
      const {...res} = {columns, ...boardres};
      return {...res}
    }
  }
  throw HandleError.NotFound
}

const createBoard = async (cb:EntityManager, boardopt:Partial<IBoard>):Promise<IBoardRes> => {
  const {title} = boardopt;
  const board = new Board ({title});
  const boardId = board.id;
  await cb.save(Board, board);
  const columns:Array<IColumnReq> = [];
  if (Array.isArray (boardopt.columns)) {
    boardopt.columns.forEach ((col) => {
      const { ...items} =  {boardId, ...col};
      const column = new Columns({ ...items});
      cb.save(Columns, column);
      const {id, title, order}:IColumnReq = column
      columns.push({id, title, order});
    })
  }
  const {...res} = {...board, columns}
  return {...res}
}

const getBoards = async (cb:EntityManager) => {
  const boardrep = await cb.find(Board);
  const wrapper = async(boardId:Board['id']) => wrap (cb, boardId);
    const res =  boardrep.map((board) =>  wrapper(board.id))
    return Promise.all(res)
}

const getBoard = async (cb: EntityManager, boardId:string|undefined) => {
  const boardres = await cb.findOne(Board, boardId);
  if (boardres) {
  const columnsres = await cb.find(Columns, { boardId });
    if (columnsres.length) {
      const columns = columnsres.map (col => {
        const {id, title, order} = col;
        return {id, title, order};
      })
      const {...res} = {columns, ...boardres};
      return {...res}
    }
  }
  throw HandleError.NotFound
}

const updateBoard = async (cb: EntityManager, boardId:string|undefined, boardopt:Partial<Board>) => {
  if (boardId!==undefined) {
    const res = await cb.update(Board, boardId, { title: boardopt.title }).then(() => wrap (cb, boardId)) ;
    return Promise.all([res])
  }
  throw HandleError.NotFound
}

const deleteBoard = async (cb: EntityManager, boardId:string|undefined)  => {
  const result = await cb.find(Board,{id: boardId});
  if (result) {
  await cb.delete(Board, boardId);
  await cb.delete (Columns, {boardId:boardId}) 
  return "OK"
  }
  throw HandleError.NotFound;
}

export {createBoard, getBoards, getBoard, updateBoard, deleteBoard};