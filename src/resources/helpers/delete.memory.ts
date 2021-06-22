class MemoryDelete {
    userIdx:string|null;
    boardIdx: string|null;
    constructor(){
        this.userIdx = null;
        this.boardIdx = null;
    }
    
    public get userId() : string|null {
        const userId = this.userIdx;
        this.userIdx = null;
        return userId;
    }

    public setUserId(id:string) {
        this.userIdx = id;
    }

    public get boardId() : string|null {
        const boardId = this.boardIdx;
        this.boardIdx = null;
        return boardId;
    }

    public setBoardId(id:string|null) {
        this.boardIdx = id;
    }
    
}

const Memory = new MemoryDelete();

export {Memory}