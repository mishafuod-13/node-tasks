const {BD} = require('./board.memory.repositiry');

const getAll = () => BD.getAll();
const addBoard = (req) =>  BD.addBoard(req);
const getBoard = (req) => BD.getBoard(req);
const updateBoard = (req, options) => BD.updateBoard(req, options);
const deleteBoard = (req) => BD.deleteBoard(req);


module.exports.deleteBoard = deleteBoard;
module.exports.updateBoard = updateBoard;
module.exports.getBoard = getBoard;
module.exports.addBoard = addBoard;
module.exports.getAll = getAll;