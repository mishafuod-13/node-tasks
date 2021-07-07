import { LoginService } from './login.service';
import { IUser } from '../users/interfaces/user.interface';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(user: IUser): Promise<{
        token: string;
    }>;
}
