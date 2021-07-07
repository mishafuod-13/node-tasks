"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const config_1 = require("../common/config");
let LoginGuard = class LoginGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (authHeader !== undefined) {
            const [type, token] = authHeader.split(' ');
            if (type !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException();
            }
            jwt.verify(token, String(config_1.default));
            return true;
        }
        throw new common_1.UnauthorizedException();
    }
};
LoginGuard = __decorate([
    common_1.Injectable()
], LoginGuard);
exports.LoginGuard = LoginGuard;
//# sourceMappingURL=login.guard.js.map