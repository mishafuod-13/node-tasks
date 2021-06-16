"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleError = require('../middleware/handleerrors');
const { Board } = require('./boards.model');
class BoardDB {
    constructor() {
        this.boards = [new Board()];
    }
    async addBoard(options) {
        const res = Object.keys(options);
        if (res.length === 2) {
            res.forEach(optionkey => {
                if ((optionkey !== "columns" && optionkey !== "title")) {
                    throw Error("Bad reqest");
                }
            });
            const NewBoard = new Board(options);
            this.boards.push(NewBoard);
            return NewBoard;
        }
        throw HandleError.BadReqest;
    }
    async updateBoard(boardId, options) {
        const result = await this.findBoard(boardId);
        if (result !== null) {
            const newBoard = new Board(options);
            this.boards.splice(result, 1, newBoard);
            return newBoard;
        }
        throw HandleError.BadReqest;
    }
    async getBoard(boardId) {
        const result = await this.findBoard(boardId);
        if (result !== null) {
            return this.boards[result];
        }
        throw HandleError.NotFound;
    }
    async findBoard(boardId) {
        const result = [];
        this.boards.forEach((board, index) => {
            if (board.id === boardId) {
                result.push(index);
            }
        });
        if (result.length) {
            if (result.length > 1) {
                throw new Error("Write error: multiple boards");
            }
            return result[0];
        }
        return null;
    }
    async deleteBoard(boardId) {
        const result = await this.findBoard(boardId);
        if (result !== null) {
            this.boards.splice(result, 1);
            return "OK";
        }
        throw HandleError.NotFound;
    }
    async getAll() {
        return this.boards;
    }
}
const BD = new BoardDB();
module.exports.BD = BD;
