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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Task = class Task extends typeorm_1.BaseEntity {
    constructor({ id = uuid_1.v4(), title = 'AAAtyty', order = 0, description = 'string', userId = null, columnId = null, boardId = null, } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.columnId = columnId;
        this.boardId = boardId;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        type: 'uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], Task.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], Task.prototype, "columnId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], Task.prototype, "boardId", void 0);
Task = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map