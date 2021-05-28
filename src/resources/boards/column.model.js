
/**
 * uuidv4 module
 * @module uuidv4
 * @description Generates a unique id
 */
const { v4: uuidv4 } = require('uuid');

class Column  {
/**
 * @requires uuidv4
     * Create a column.
     * @param {string} [id=uuidv4()] - Column ID.
     * @param {string} [title="Djdsdddsd"]  - Title column.
     * @param {number} [order=0] - Column order.
     */
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
/**
 * Export Column-model module.
 * @module Column
 */
module.exports.Column = Column;