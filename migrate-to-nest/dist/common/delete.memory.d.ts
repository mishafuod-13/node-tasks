declare class MemoryDelete {
    userIdx: string | null;
    boardIdx: string | null;
    constructor();
    get userId(): string | null;
    setUserId(id: string): void;
    get boardId(): string | null;
    setBoardId(id: string | null): void;
}
declare const Memory: MemoryDelete;
export default Memory;
