
import { Board, IBoard, IBoardRes } from './boards.model';
import { Columns } from './column.model';
import {EntityManager } from 'typeorm';




const HandleError = require('../middleware/handleerrors')

const wrap = async(cb:EntityManager, boardId:string):Promise<IBoardRes> => {
  const boardres = await cb.findOne(Board, boardId);
  if (boardres) {
  const columnsres = await cb.find(Columns, { boardId:boardId });
    if (columnsres.length) {
      const columns = columnsres.map (col => {
        let {id, title, order} = col;
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
  let board = new Board ({title});
  const boardId = board['id'];
  await cb.save(Board, board);
  let columns:Array<Columns> = [];
  if (Array.isArray (boardopt.columns)) {
    boardopt.columns.forEach ((col) => {
      let { ...items} =  {boardId, ...col};
      const column = new Columns({ ...items});
      const pusher = async () => await cb.save(Columns, column);
      pusher();
      columns.push(column);
    })
  }
  const {...res} = {...board, columns}
  return {...res}

}

const getBoards = async (cb:EntityManager) => {
  const boardrep = await cb.find(Board);
  const wrapper = async(boardId:Board['id']) => await wrap (cb, boardId);
    const res =  boardrep.map((board) =>  {
     return  wrapper(board.id)
    })
    return Promise.all(res)
}

const getBoard = async (cb: EntityManager, boardId:string|undefined) => {
  const boardres = await cb.findOne(Board, boardId);
  if (boardres) {
  const columnsres = await cb.find(Columns, { boardId:boardId });
    if (columnsres.length) {
      const columns = columnsres.map (col => {
        let {id, title, order} = col;
        return {id, title, order};
      })
      const {...res} = {columns, ...boardres};
      return {...res}
    }
  }
  throw HandleError.NotFound
}

const updateBoard = async (cb: EntityManager, boardId:string|undefined, boardopt:Partial<Board>) => {
  console.log (boardopt)
  if (boardId!==undefined) {
    let res = await cb.update(Board, { title: boardopt['title'] }, { id: boardId }).then(() => wrap (cb, boardId )) ;
    return Promise.all([res])
  }
  throw HandleError.NotFound
  
}

const deleteBoard = async (cb: EntityManager, boardId:string|undefined)  => {
  const result = await cb.find(Board,{id: boardId});
  if (result) {
  await cb.delete(Board, boardId);
  return "OK"
  }
  throw HandleError.NotFound;
}
export {createBoard, getBoards, getBoard, updateBoard, deleteBoard}