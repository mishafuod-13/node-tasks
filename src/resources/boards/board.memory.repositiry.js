/**
 * Board module
 * @module Board
 * @description import Board - class
 */
const {Board} = require('./boards.model.js');

 /** Class representing a database for board entity. */

class BoardDB {
   /**
    * @requires Board
    *  @this BoardDB
     * Create a BoardDB entity.
     * @param {Array} [this.boards=[new Board()]] - Array with entities Board.
     */
    constructor(){
        this.boards = [new Board()];
    }
       /** 
       * Accepts options for creating a new entity Board and entering it into the database.
       * @param {object} options - Object with options
       * @param {string} options.title  - Title for Board entity
       * @param {Array} options.columns - Array with objects Columns (optional)
       * @returns {object|Error} return new Board object or error if input values are incorrect.
       */

    addBoard (options) {
     const res = Object.keys (options);
     if (res.length === 2) {
        res.forEach (optionkey => {
          if ((optionkey !== "columns" && optionkey !== "title")) {
              throw Error ("Bad reqest")
          }
        });
        const NewBoard = new Board (options);
        this.boards.push(NewBoard)
        return NewBoard;
     }
     throw Error ("Bad reqest")
    }

      /** 
       * Accepts options for update a entity Board in "Database".
       * @param {string} boardId - Id by which to search.
       * @param {object} options - Object with options
       * @param {string} options.title  - Title for Board entity
       * @param {Array} options.columns - Array with objects Columns (optional)
       * @returns {object|null} - return new Board object or null if boardId are incorrect/not exist.
       */

    updateBoard (boardId, options) {
       const result = this.findBoard(boardId);
        if (result) {
          const newBoard = new Board (options);
          this.boards.splice(result,1,newBoard);
          return newBoard
        }
      return result;
    }

     /** 
       * Searches for an entity by id
       * @param {string} boardId - Id by which to search.
       * @returns {object|Error} - return Board object or error if boardId are incorrect/not exist.
       */

    getBoard (boardId) {
        const result = this.findBoard(boardId);
        if (result !== null){
          return this.boards[result];
        }
        throw Error ('Board not found')
    }

    /** 
       * Searches for an entity by id
       * @param {string} boardId - Id by which to search.
       * @returns {number|Error|null} - return index of array entity Board| error if there are several entities | null if board not exist .
       */
    
    findBoard (boardId){
      const result = [];
      this.boards.forEach ( (board, index) => {
        if ( board.id === boardId ) {
          result.push(index);
         }
      });
       if (result.length) {
          if (result.length > 1) {
            throw new Error ("Write error: multiple boards")
           }
        return result[0];
        }
     return null;
    }

     /** 
       * Delete Board by id
       * @param {string} boardId - Id board by which to search.
       * @returns {string|null}  - "OK" if the board is successfully removed | null if board not exist
       */

    deleteBoard (boardId) {
    const result = this.findBoard(boardId);
    if (result)  {
      this.boards.splice(result,1);
      return "OK"
    }
      return result;
    }

    /** Get the this.board value.
       * @return {Array}  - returns an array with all the boards
       */

    getAll () {
        return this.boards; 
    }

} 

/** @constant {object} BoardDB - creates an instance of the class BoardDB */
const BD = new BoardDB ();
/**
* Import constant BD
* @module BD
*/
module.exports.BD = BD; 