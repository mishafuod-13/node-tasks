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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    wrap(userDto) {
        const { login, id, name } = userDto;
        return { login, id, name };
    }
    async findAll() {
        return this.usersRepository.find().then(users => users.map(user => this.wrap(user)));
    }
    async update(id, newUserDto) {
        const result = await this.usersRepository.findOne(id);
        if (result !== undefined) {
            await this.usersRepository.update(id, newUserDto);
            return this.usersRepository.findOne(id).then(user => this.wrap(user));
        }
        throw new common_1.NotFoundException();
    }
    async create(createUserDto) {
        const newUser = new user_entity_1.User(createUserDto);
        await this.usersRepository.save(newUser);
        return this.wrap(newUser);
    }
    async findOne(id) {
        const result = await this.usersRepository.findOne(id);
        if (result) {
            return this.wrap(result);
        }
        throw new common_1.NotFoundException();
    }
    async remove(id) {
        const result = await this.usersRepository.findOne(id);
        if (result) {
            await this.usersRepository.delete(id);
            return "OK";
        }
        throw new common_1.UnauthorizedException();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map