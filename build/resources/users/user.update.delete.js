"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { TaskBD } = require('../tasks/task.memory.repository.ts');
async function userUpdateDelete(userId) {
    const boards = Object.values(TaskBD.taskrep);
    boards.forEach((arr) => {
        arr.forEach((i) => {
            if (i.userId === userId) {
                i.deleteUserId();
            }
        });
    });
}
;
module.exports.userUpdateDelete = userUpdateDelete;
