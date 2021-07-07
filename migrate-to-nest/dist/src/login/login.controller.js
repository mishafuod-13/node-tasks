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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
const jwt = require("jsonwebtoken");
const config_1 = require("../../common/config");
const user_entity_1 = require("../users/entities/user.entity");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async create(user) {
        console.log(user);
        const checkUser = await this.loginService.checkAuthenticate(user);
        console.log(checkUser);
        if (checkUser) {
            const userResult = { userId: checkUser.id, login: checkUser.login };
            console.log(userResult);
            const jwtToken = jwt.sign(userResult, String(config_1.default));
            return { token: jwtToken };
        }
        throw new common_1.ForbiddenException();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "create", null);
LoginController = __decorate([
    common_1.Controller('/login'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map