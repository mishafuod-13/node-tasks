import { UsersService } from './users.service';
import { IUserParams } from './interfaces/user-params.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: IUserParams): Promise<IUserParams>;
    findAll(): Promise<IUserParams[]>;
    findOne(id: string): Promise<IUserParams>;
    update(id: string, updateUserDto: IUserParams): Promise<IUserParams>;
    remove(id: string): Promise<"OK">;
}
