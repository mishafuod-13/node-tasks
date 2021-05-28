/**
 * Import uuidv4 module
 * @module uuidv4
 */
const { v4: uuidv4 } = require('uuid');
/**
 * Import Column-model module
 * @module Column
 */
const {Column} = require('./column.model.js');

 /** Class representing a board. */

class Board  {
   /**
    * @requires Column
    * @requires uuidv4
     * Create a Board entity.
     * @param {string} [id=uuidv4()] - Board ID.
     * @param {string} [title="AAAA"] - Title board.
     * @param {object} [columns=[new Column()]] - Array with entities Сolumn.
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