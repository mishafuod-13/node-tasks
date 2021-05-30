/**
 * @module BD
 * @description imports the model DB Board entity
 */
const {BD} = require('./board.memory.repositiry');
import { MyBoard } from './boards.model'; 
/** 
 * The function calls the entity's getAll method 
 * @method 
 * @name getAll
 * @return {Array} 
 * */
const getAll = (): Array <MyBoard> => BD.getAll();

/** 
 * The function calls the entity's addBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name addBoard
 * @param {object} req  
 * @returns {object|Error} 
 * */
const addBoard = (req:string) =>  BD.addBoard(req);

/** 
 * The function calls the entity's getBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name getBoard
 * @param {string} req - boardId 
 * @returns {object|Error} 
 * */
const getBoard = (req:string):object|Error => BD.getBoard(req);

/** 
 * The function calls the entity's updateBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name updateBoard
 * @param {string} req - boardId 
 * @param {object} options - values, where should be updated in entity "board"
 * @returns {object|null} 
 * */
const updateBoard = (req:string, options:object):object|null => BD.updateBoard(req, options);

/** 
 * The function calls the entity's deleteBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name deleteBoard
 * @param {string} req - boardId 
 * @returns {string|null} 
 * */
const deleteBoard = (req:string):string|null => BD.deleteBoard(req);


module.exports.deleteBoard = deleteBoard;
module.exports.updateBoard = updateBoard;
module.exports.getBoard = getBoard;
module.exports.addBoard = addBoard;
module.exports.getAll = getAll;