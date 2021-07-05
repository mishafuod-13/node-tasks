"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var uuid_1 = require("uuid");
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuid_1.v4() : _c, _d = _b.name, name = _d === void 0 ? 'USER' : _d, _e = _b.login, login = _e === void 0 ? 'user' : _e, _f = _b.password, password = _f === void 0 ? 'P@55w0rd' : _f;
        this.id = id,
            this.name = name;
        this.login = login;
        this.password = password;
        this.deletedId = null;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid")
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "login");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "password");
    User = __decorate([
        typeorm_1.Entity({ name: "users" })
    ], User);
    return User;
}());
exports.User = User;
