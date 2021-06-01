import { IBoard } from './boards.model';

const {BD} = require('./board.memory.repositiry'); 

const getAll = (): Array <IBoard> => BD.getAll();

const addBoard = (req:string) =>  BD.addBoard(req);

const getBoard = (req:string): IBoard => BD.getBoard(req);

const updateBoard = (req:string, options:IBoard):IBoard|null => BD.updateBoard(req, options);

const deleteBoard = (req:string):string|null => BD.deleteBoard(req);


module.exports.deleteBoard = deleteBoard;
module.exports.updateBoard = updateBoard;
module.exports.getBoard = getBoard;
module.exports.addBoard = addBoard;
module.exports.getAll = getAll;