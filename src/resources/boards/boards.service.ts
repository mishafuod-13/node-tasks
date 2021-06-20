import { IBoard} from './boards.model';
import {EntityManager } from 'typeorm';
import {createBoard, getBoard, getBoards, updateBoard} from './board.memory.repositiry'



const addBoard = async (cb: EntityManager, req:Partial<IBoard>): Promise<IBoard|undefined> => await createBoard(cb, req);
const getBoardById = async(cb: EntityManager, boardId: string|undefined) => getBoard(cb, boardId)

const getAllBoards = async (cb: EntityManager) => await getBoards(cb);
const updateBoardById = async(cb: EntityManager, boardId: string|undefined, req:Partial<IBoard>) => updateBoard(cb, boardId, req);
/*

const deleteBoardById = async (cb: EntityManager, boardId:string|undefined) => deleteBoard(cb, boardId); 
getAllBoards, getBoardById, updateBoardById, deleteBoardById

*/


export {addBoard, getBoardById, getAllBoards, updateBoardById}