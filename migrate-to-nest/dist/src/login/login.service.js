"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../users/entities/user.entity");
let LoginService = class LoginService {
    async checkAuthenticate(user) {
        const { login, password } = user;
        const userRepository = typeorm_1.getManager().getRepository(user_entity_1.User);
        const findRes = await userRepository.findOne({ login: login });
        const compare = await bcrypt.compare(String(password), String(findRes.password));
        console.log(findRes, compare);
        if (findRes && await bcrypt.compare(String(password), String(findRes.password))) {
            return findRes;
        }
        return false;
    }
};
LoginService = __decorate([
    common_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map