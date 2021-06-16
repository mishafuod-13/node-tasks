"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = void 0;
class HandleError extends Error {
    constructor(status, message, name) {
        super(name);
        this.name = name,
            this.status = status,
            this.message = message;
    }
}
exports.HandleError = HandleError;
const BadReq = new HandleError(400, "Bad Reqest", 'HandleError');
const NotFound = new HandleError(404, 'Not Found', 'HandleError');
const Unauthorized = new HandleError(401, 'Unauthorized', 'HandleError');
module.exports = {
    BadReqest: BadReq,
    NotFound,
    Unauthorized
};
