
import { IBoard } from './boards.model';

const {Board} = require('./boards.model');

class BoardDB {
    readonly boards: Array <IBoard> ;

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

   async updateBoard (boardId:string, options:IBoard) {
       const result = this.findBoard(boardId);
       return result.then(
         (response:number|null|undefined):IBoard => {
            if (typeof response !== undefined && response !== null) {
              const newBoard = new Board (options);
              this.boards.splice(response as number,1,newBoard);
              return newBoard as IBoard;
          }
          throw Error ('Board not found');
          },
          (rej:PromiseRejectionEvent):void => {
            throw Error ('Rejected promise:' + rej)
          } 
       )
    }


   async getBoard (boardId:string) {
        const result = this.findBoard(boardId);
       return result.then(
          (response:number|null|undefined): IBoard => {
            if (typeof response === 'number' && response !== null) {
              return this.boards?.[response] as IBoard;
            }
            throw Error ('Board not found');
            },
          (rej:PromiseRejectionEvent):void => {
          throw Error ('Rejected promise:' + rej)
          }
        );
    }


    async findBoard (boardId:string): Promise<null|number> {
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


   async deleteBoard (boardId:string) {
    const result = this.findBoard(boardId);
    return result.then (
      (res: number|null):'OK' => {
        if (res) {
          this.boards.splice(res as number,1);
          return "OK"
        }
        throw Error ('Board not found');
      },
      (rej:PromiseRejectionEvent):void => {
        throw Error ('Rejected promise:' + rej);
      } 
    )
    }


    getAll (): Array<IBoard> {
        return this.boards; 
    }

} 


const BD: BoardDB = new BoardDB();

module.exports.BD = BD; 