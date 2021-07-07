import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(id: string): Promise<User | null>;
}
