"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { BD } = require('./board.memory.repositiry');
const getAll = async () => BD.getAll();
const addBoard = async (req) => BD.addBoard(req);
const getBoard = async (req) => BD.getBoard(req);
const updateBoard = async (req, options) => BD.updateBoard(req, options);
const deleteBoard = (req) => BD.deleteBoard(req);
module.exports = { deleteBoard, updateBoard, getBoard, addBoard, getAll };
