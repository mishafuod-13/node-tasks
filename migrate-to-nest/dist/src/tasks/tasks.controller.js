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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const login_guard_1 = require("../guards/login.guard");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    create(id, createTaskDto) {
        return this.taskService.create(id, createTaskDto);
    }
    find(boardId) {
        return this.taskService.find(boardId);
    }
    findOne(boardId, taskId) {
        return this.taskService.findOne(boardId, taskId);
    }
    update(boardId, taskId, updateTaskDto) {
        return this.taskService.update(boardId, taskId, updateTaskDto);
    }
    remove(taskId) {
        return this.taskService.remove(taskId);
    }
};
__decorate([
    common_1.Post('/:boardId/tasks'),
    __param(0, common_1.Param('boardId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
__decorate([
    common_1.Get('/:boardId/tasks'),
    __param(0, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "find", null);
__decorate([
    common_1.Get('/:boardId/tasks/:taskId'),
    __param(0, common_1.Param('boardId')),
    __param(1, common_1.Param('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findOne", null);
__decorate([
    common_1.Put('/:boardId/tasks/:taskId'),
    __param(0, common_1.Param('boardId')),
    __param(1, common_1.Param('taskId')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "update", null);
__decorate([
    common_1.Delete('/:boardId/tasks/:taskId'),
    __param(0, common_1.Param('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "remove", null);
TasksController = __decorate([
    common_1.Controller('/boards'),
    common_1.UseGuards(login_guard_1.LoginGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map