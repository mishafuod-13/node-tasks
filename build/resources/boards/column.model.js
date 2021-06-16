"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
class Column {
    constructor({ id = uuidv4(), title = "Djdsdddsd", order = 0, } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
module.exports.Column = Column;
