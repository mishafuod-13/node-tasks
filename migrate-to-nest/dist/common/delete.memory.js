"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryDelete {
    constructor() {
        this.userIdx = null;
        this.boardIdx = null;
    }
    get userId() {
        const userId = this.userIdx;
        this.userIdx = null;
        return userId;
    }
    setUserId(id) {
        this.userIdx = id;
    }
    get boardId() {
        const boardId = this.boardIdx;
        this.boardIdx = null;
        return boardId;
    }
    setBoardId(id) {
        this.boardIdx = id;
    }
}
const Memory = new MemoryDelete();
exports.default = Memory;
//# sourceMappingURL=delete.memory.js.map