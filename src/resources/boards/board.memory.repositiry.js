const {Board} = require('./boards.model.js');

class BoardBD {
    constructor(){
        this.boards = [new Board()];
    }

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

    updateBoard (boardId, options) {
       const result = this.findBoard(boardId);
        if (result) {
          const newBoard = new Board (options);
          this.boards.splice(result,1,newBoard);
          return newBoard
        }
      return result;
    }


    getBoard (boardId) {
        const result = this.findBoard(boardId);
        if (result !== null){
          return this.boards[result];
        }
        throw Error ('Board not found')
    }

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

    deleteBoard (boardId){
      const result = this.findBoard(boardId);
    if (result)  {
      this.boards.splice(result,1);
      return "OK"
    }
      return result;
    }

    getAll () {
        return this.boards; 
    }

} 
const BD = new BoardBD ();
module.exports.BD = BD; 