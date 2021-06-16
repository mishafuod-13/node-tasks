"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel = require('./user.model').User;
const HandleError = require('../middleware/handleerrors');
const { userUpdateDelete } = require('./user.update.delete');
const typeorm_1 = require("typeorm");
//const connection =  createConnection({
//  name: "posrrrtgres",
//  type: "postgres",
//  host: "localhost",
//  port: 5433,
//  username: "postgres",
//  password: "12345",
// database: "postgres"
//});
typeorm_1.createConnection().then((val) => {
    val.connect();
});
class UsersBD {
    constructor() {
        this.users = [];
    }
    async createNewUser(options) {
        const newUser = new UserModel(options);
        this.users.push(newUser);
        return newUser.toResponse();
    }
    async deleteUser(userId) {
        const result = await this.findUser(userId);
        if (result !== null && typeof result === 'number') {
            this.users.splice(result, 1);
            userUpdateDelete(userId);
            return "OK";
        }
        throw HandleError.Unauthorized;
    }
    async updateUser(userId, options) {
        const result = await this.findUser(userId);
        if (result !== null) {
            const newUser = new UserModel(options);
            this.users.splice(result, 1, newUser);
            return newUser?.toResponse();
        }
        return result;
    }
    async getUser(userId) {
        const result = await this.findUser(userId);
        if (typeof result === 'number') {
            const user = this.users[result];
            if (typeof user !== 'undefined')
                return user.toResponse();
        }
        throw HandleError.NotFound;
    }
    async findUser(userId) {
        const result = [];
        this.users.forEach((user, index) => {
            if (user.id === userId) {
                result.push(index);
            }
        });
        if (result.length === 1 && typeof result[0] !== 'undefined') {
            return result[0];
        }
        throw HandleError.NotFound;
    }
    async getAll() {
        const reposit = this.users;
        const arrResp = reposit.map(user => user.toResponse());
        return arrResp;
    }
}
const UserBD = new UsersBD();
module.exports.UserBD = UserBD;
