import {EntityManager } from 'typeorm';
import { IBoardRes} from './boards.model';
import {createBoard, getBoard, getBoards, updateBoard, deleteBoard} from './board.memory.repositiry'



const addBoard = async (cb: EntityManager, req:Partial<IBoardRes>): Promise<IBoardRes|undefined> => createBoard(cb, req);

const getBoardById = async(cb: EntityManager, boardId: string|undefined):Promise<IBoardRes> => getBoard(cb, boardId);

const getAllBoards = async (cb: EntityManager):Promise<IBoardRes[]> => getBoards(cb);

const updateBoardById = async(cb: EntityManager, boardId: string|undefined, req:Partial<IBoardRes>):Promise<IBoardRes> => updateBoard(cb, boardId, req);

const deleteBoardById = async (cb: EntityManager, boardId:string|undefined):Promise<'OK'> => deleteBoard(cb, boardId); 


export {addBoard, getBoardById, getAllBoards, updateBoardById, deleteBoardById}