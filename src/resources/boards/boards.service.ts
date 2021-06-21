import {EntityManager } from 'typeorm';
import { IBoard} from './boards.model';
import {createBoard, getBoard, getBoards, updateBoard, deleteBoard} from './board.memory.repositiry'



const addBoard = async (cb: EntityManager, req:Partial<IBoard>): Promise<IBoard|undefined> => createBoard(cb, req);
const getBoardById = async(cb: EntityManager, boardId: string|undefined) => getBoard(cb, boardId);
const getAllBoards = async (cb: EntityManager) => getBoards(cb);
const updateBoardById = async(cb: EntityManager, boardId: string|undefined, req:Partial<IBoard>) => updateBoard(cb, boardId, req);

const deleteBoardById = async (cb: EntityManager, boardId:string|undefined) => deleteBoard(cb, boardId); 




export {addBoard, getBoardById, getAllBoards, updateBoardById, deleteBoardById}