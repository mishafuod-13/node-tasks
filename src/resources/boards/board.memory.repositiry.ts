
import { IBoard } from './boards.model';

const {Board} = require('./boards.model');

class BoardDB {
   boards: Array <IBoard> ;

    constructor(){
       this.boards = [new Board()];
    }


   async addBoard (options: IBoard):Promise<IBoard> {
     const res = Object.keys(options);
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

   async updateBoard (boardId:string, options:IBoard):Promise<IBoard> {
       const result = await this.findBoard(boardId);
       if ( result !== null) {
         const newBoard = new Board (options);
         this.boards.splice(result,1,newBoard);
         return newBoard as IBoard;
       }
      throw Error ('Board not found');
    }


   async getBoard (boardId:string):Promise<IBoard> {
      const result = await this.findBoard(boardId);
      if (result !== null) {
      return this.boards[result] as IBoard;
      }
      throw Error ('Board not found');
    }


    async findBoard (boardId:string): Promise <null|number> {
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
        return result[0] as number;
        }
     return null;
    }


   async deleteBoard (boardId:string):Promise <'OK'> {
    const result = await this.findBoard(boardId);
      if (result !== null){
        this.boards.splice(result,1);
        return "OK"
      }
      throw Error ('Board not found');
    }


    async getAll (): Promise<Array<IBoard>> {
        return this.boards; 
    }

} 


const BD: BoardDB = new BoardDB();

module.exports.BD = BD; 