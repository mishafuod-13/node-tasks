
const { v4: uuidv4 } = require('uuid');

export interface IColumn {
  id?:string;
  title:string;
  order:number;
}

class Column {
  id: string;

  title: string;

  order:number;
  
    constructor ({
      id = uuidv4(),
      title = "Djdsdddsd",
      order = 0,
    } = {}) {
      this.id = id;
      this.title = title;
      this.order = order;
    }
}

module.exports.Column = Column;