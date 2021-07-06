"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const board_entity_1 = require("./entities/board.entity");
const column_entity_1 = require("./entities/column.entity");
let BoardsService = class BoardsService {
    constructor(boardsRepository, columnRepository) {
        this.boardsRepository = boardsRepository;
        this.columnRepository = columnRepository;
    }
    async wrap(boardId) {
        const boardres = await this.boardsRepository.findOne(boardId);
        if (boardres) {
            const columnsres = await this.columnRepository.find({ boardId: boardId });
            if (columnsres.length) {
                const columns = columnsres.map(col => {
                    const { id, title, order } = col;
                    return { id, title, order };
                });
                const { ...res } = { columns, ...boardres };
                return { ...res };
            }
        }
    }
    async findAll() {
        const boardrep = await this.boardsRepository.find();
        const wrapper = async (boardId) => this.wrap(boardId);
        const res = boardrep.map((board) => wrapper(board.id));
        return Promise.all(res);
    }
    async update(id, boardDto) {
        const res = await this.boardsRepository.update(id, { title: boardDto.title }).then(() => this.wrap(id));
        return res;
    }
    async create(createBoardDto) {
        const board = new board_entity_1.Board({ title: createBoardDto.title });
        const boardId = board.id;
        await this.boardsRepository.save(board);
        const columns = [];
        if (Array.isArray(createBoardDto.columns)) {
            createBoardDto.columns.forEach((col) => {
                const { ...items } = { boardId, ...col };
                const column = new column_entity_1.Columns({ ...items });
                this.columnRepository.save(column);
                const { id, title, order } = column;
                columns.push({ id, title, order });
            });
        }
        const { ...res } = { ...board, columns };
        return { ...res };
    }
    async findOne(id) {
        const boardres = await this.boardsRepository.findOne(id);
        if (boardres) {
            const columnsres = await this.columnRepository.find({ boardId: id });
            if (columnsres.length) {
                const columns = columnsres.map(col => {
                    const { id, title, order } = col;
                    return { id, title, order };
                });
                const { ...res } = { columns, ...boardres };
                return { ...res };
            }
        }
    }
    async remove(id) {
        const result = await this.boardsRepository.findOne(id);
        if (result) {
            await this.boardsRepository.delete(id);
            await this.columnRepository.delete({ boardId: id });
            return "OK";
        }
    }
};
BoardsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(board_entity_1.Board)),
    __param(1, typeorm_1.InjectRepository(column_entity_1.Columns)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map