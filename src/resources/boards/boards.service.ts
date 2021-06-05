import { IBoard } from './boards.model';

const {BD} = require('./board.memory.repositiry'); 

const getAll = async(): Promise<Array <IBoard>> => BD.getAll();

const addBoard = async (req:string): Promise<IBoard> =>  BD.addBoard(req);

const getBoard = async (req:string): Promise<IBoard> => BD.getBoard(req);

const updateBoard = async (req:string, options:IBoard):Promise <IBoard|null> => BD.updateBoard(req, options);

const deleteBoard = (req:string):Promise<string|null> => BD.deleteBoard(req);


module.exports = { deleteBoard, updateBoard, getBoard, addBoard, getAll };