"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { getAll, createNewUser, getUser, deleteUser, updateUser } = require('./user.service');
router.route('/').get(async (_req, res, next) => {
    try {
        const users = await getAll();
        res.json(users);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:userId').get(async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await getUser(userId);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:userId').put(async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await updateUser(userId, req.body);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
});
router.route('/').post(async (req, res, next) => {
    try {
        const newUser = await createNewUser(req.body);
        res.status(201).json(newUser);
    }
    catch (err) {
        next(err);
    }
});
router.route('/:userId').delete(async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await deleteUser(userId);
        if (result === "OK") {
            res
                .status(204)
                .send("The user has been deleted");
        }
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;
