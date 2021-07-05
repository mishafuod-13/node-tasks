import { IUser } from '../interfaces/user.interface';
export declare class User {
    id?: string;
    name: string;
    login: string;
    password: string;
    deletedId?: null | string;
    constructor({ id, name, login, password }?: IUser);
}
