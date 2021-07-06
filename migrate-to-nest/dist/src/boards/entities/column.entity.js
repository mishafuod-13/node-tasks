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
exports.Columns = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Columns = class Columns extends typeorm_1.BaseEntity {
    constructor({ id = uuid_1.v4(), title = "Djdsdddsd", order = 0, boardId = '' } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.order = order;
        this.boardId = boardId;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Columns.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Columns.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Columns.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Columns.prototype, "boardId", void 0);
Columns = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Columns);
exports.Columns = Columns;
//# sourceMappingURL=column.entity.js.map