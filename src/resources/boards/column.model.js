const { v4: uuidv4 } = require('uuid');

class Column  {
    constructor ({
      id = uuidv4(),
      title = "Djdsdddsd",
      order = 0,
    } = {}) {
      this.id = id;
      this.title = title;
      this.order = order;
    }
   
    toResponse() {
      const { title, order } = this;
      return { title, order };
    }
}

module.exports.Column = Column;