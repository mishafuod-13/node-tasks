import { UsersService } from './users.service';
import { IUserParams } from './interfaces/user-params.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: IUserParams): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: IUserParams): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<void>;
}
