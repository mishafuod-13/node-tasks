
/**
 * uuidv4 module
 * @module uuidv4
 * @description Generates a unique id
 */

const { v4: uuidv4 } = require('uuid');

/** Class representing a column. */
class Column  {
/**
     * Create a column.
     * @param {string} id - Column ID.
     * @param {string} title - Title column.
     * @param {number} order - Column order.
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
 * Column module.
 * @module Column
 */
module.exports.Column = Column;