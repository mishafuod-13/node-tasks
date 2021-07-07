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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async find(boardId) {
        if (boardId !== undefined) {
            const tasks = await this.tasksRepository.find({ boardId: boardId });
            if (tasks.length) {
                return tasks;
            }
        }
        throw new common_1.NotFoundException();
    }
    async update(boardId, taskId, updateTaskDto) {
        const check = await this.tasksRepository.findOne({ id: taskId, boardId });
        if (check) {
            await this.tasksRepository.update({ id: taskId, boardId }, updateTaskDto);
            return this.tasksRepository.findOne(taskId);
        }
        throw new common_1.NotFoundException();
    }
    async create(boardIds, taskoption) {
        if (boardIds !== undefined) {
            const option = { ...taskoption, boardId: boardIds };
            const ntask = new task_entity_1.Task(option);
            await this.tasksRepository.save(ntask);
            return ntask;
        }
        throw new common_1.BadRequestException();
    }
    async findOne(boardId, taskId) {
        const result = await this.tasksRepository.findOne({ boardId: boardId, id: taskId });
        if (result) {
            return result;
        }
        throw new common_1.NotFoundException();
    }
    async remove(taskId) {
        const result = await this.tasksRepository.findOne(taskId);
        if (result) {
            await this.tasksRepository.delete(taskId);
            return "OK";
        }
        throw new common_1.NotFoundException();
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map