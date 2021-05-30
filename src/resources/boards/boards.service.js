/**
 * @module BD
 * @description imports the model DB Board entity
 */
const {BD} = require('./board.memory.repositiry');

/** 
 * The function calls the entity's getAll method 
 * @method 
 * @name getAll
 * @return {Array} 
 * */
const getAll = () => BD.getAll();

/** 
 * The function calls the entity's addBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name addBoard
 * @param {object} req  
 * @returns {object|Error} 
 * */
const addBoard = (req) =>  BD.addBoard(req);

/** 
 * The function calls the entity's getBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name getBoard
 * @param {string} req - boardId 
 * @returns {object|Error} 
 * */
const getBoard = (req) => BD.getBoard(req);

/** 
 * The function calls the entity's updateBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name updateBoard
 * @param {string} req - boardId 
 * @param {object} options - values, where should be updated in entity "board"
 * @returns {object|null} 
 * */
const updateBoard = (req, options) => BD.updateBoard(req, options);

/** 
 * The function calls the entity's deleteBoard method. 
 * See class BoardDB for more information.
 * @method 
 * @name deleteBoard
 * @param {string} req - boardId 
 * @returns {string|null} 
 * */
const deleteBoard = (req) => BD.deleteBoard(req);


module.exports.deleteBoard = deleteBoard;
module.exports.updateBoard = updateBoard;
module.exports.getBoard = getBoard;
module.exports.addBoard = addBoard;
module.exports.getAll = getAll;