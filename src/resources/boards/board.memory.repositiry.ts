
import { IBoard } from './boards.model';

const {Board} = require('./boards.model');

class BoardDB {
    boards: Array <IBoard> ;


    constructor(){
       this.boards = [new Board()];
    }


    addBoard (options: IBoard):IBoard {
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

    updateBoard (boardId:string, options:IBoard ) {
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
    getBoard (boardId:string) {
        const result = this.findBoard(boardId);
        if (result !== null && result !== undefined){
          return this.boards[result];
        }
        throw Error ('Board not found')
    }

    /** 
       * Searches for an entity by id
       * @param {string} boardId - Id by which to search.
       * @returns {number|Error|null} - return index of array entity Board| error if there are several entities | null if board not exist .
       */
    findBoard (boardId:string){
      const result:Array<number> = [] ;
      this.boards.forEach ( (board: IBoard , index:number): void => {
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
    deleteBoard (boardId:string) {
    const result = this.findBoard(boardId);
    if (result)  {
      this.boards.splice(result,1);
      return "OK"
    }
      return result;
    }

    /** Get the this.board value.
      * @returns {Array}  - returns an array with all the boards
      */
    getAll (): Array<IBoard> {
        return this.boards; 
    }

} 

/** @constant {object} BD - creates an instance of the class BoardDB */
const BD: BoardDB = new BoardDB();
/**
 * Imports the created instance of the BoardDB class.
 * @module BD
 */
module.exports.BD = BD; 