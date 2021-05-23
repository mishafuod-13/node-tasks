const { v4: uuidv4 } = require('uuid');
const {Column} = require('./column.model.js');

class Board  {
  constructor({
    id = uuidv4(),
    title = 'AAAA',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  toResponse () {
    const { id, name, login } = this;
    return { id, name, login };
  }  
}

module.exports.Board = Board;