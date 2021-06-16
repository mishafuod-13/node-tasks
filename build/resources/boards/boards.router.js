"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { getAll, addBoard, getBoard, updateBoard, deleteBoard } = require('./boards.service');
router.route('/').get(async (__req, res, next) => {
    try {
        const boards = await getAll();
        res.json(boards);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId').get(async (req, res, next) => {
    try {
        const result = await getBoard(req.params['boardId']);
        if (result) {
            res
                .json(result);
        }
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId').put(async (req, res, next) => {
    const result = await updateBoard(req.params['boardId'], req.body);
    try {
        res.json(result);
    }
    catch (err) {
        next(err);
    }
});
router.route('/').post(async (req, res, next) => {
    try {
        const NewBoard = await addBoard(req.body);
        res
            .status(201)
            .json(NewBoard);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:boardId').delete(async (req, res, next) => {
    try {
        const result = await deleteBoard(req.params['boardId']);
        if (result === "OK") {
            res
                .status(204)
                .send("The board has been deleted");
        }
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;
