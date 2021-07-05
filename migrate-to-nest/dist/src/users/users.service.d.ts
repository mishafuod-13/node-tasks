import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { IUserParams } from './interfaces/user-params.interface';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    update(id: string, newUserDto: IUserParams): Promise<User>;
    create(createUserDto: IUserParams): Promise<User>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
