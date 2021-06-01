
import { IColumn } from './column.model';

const { v4: uuidv4 } = require('uuid');

const {Column} = require('./column.model');


export interface IBoard {
  id:string;
  title:string;
  columns?: Array<IColumn>;
}

class Board  {
  id:string;

  title:string;

  columns?: Array<IColumn>;

   /**
    * @requires Column
    * @requires uuidv4
    * @this Board
     * Create a Board entity.
     * @param {string} [id=uuidv4()] - Board ID.
     * @param {string} [title="AAAA"] - Title board.
     * @param {Array} [columns=[new Column()]] - Array with entities Сolumn.
     */
  constructor({
    id = uuidv4(),
    title = 'AAAA',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
/**
 * Import Board-model module.
 * @module Board
 */
module.exports.Board = Board;