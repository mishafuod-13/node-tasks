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
exports.UserSubscriber = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../entities/user.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
const delete_memory_1 = require("../../../common/delete.memory");
let UserSubscriber = class UserSubscriber {
    constructor(connection) {
        connection.subscribers.push(this);
    }
    listenTo() {
        return user_entity_1.User;
    }
    async beforeRemove(event) {
        const id = delete_memory_1.default.userId;
        if (id !== null) {
            await event.manager.update(task_entity_1.Task, { userId: id }, { userId: null });
        }
    }
    async beforeInsert(event) {
        event.entity.password = bcrypt.hashSync(event.entity.password, 10);
    }
};
UserSubscriber = __decorate([
    typeorm_1.EventSubscriber(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], UserSubscriber);
exports.UserSubscriber = UserSubscriber;
//# sourceMappingURL=user.subscriber.js.map