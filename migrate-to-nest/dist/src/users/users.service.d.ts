import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { IUserParams } from './interfaces/user-params.interface';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    wrap(userDto: User): IUserParams;
    findAll(): Promise<IUserParams[]>;
    update(id: string, newUserDto: IUserParams): Promise<IUserParams>;
    create(createUserDto: IUserParams): Promise<IUserParams>;
    findOne(id: string): Promise<IUserParams>;
    remove(id: string): Promise<'OK'>;
}
