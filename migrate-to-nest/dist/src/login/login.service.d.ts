import { User } from 'src/users/entities/user.entity';
import { IUser } from '../users/interfaces/user.interface';
export declare class LoginService {
    checkAuthenticate(user: IUser): Promise<false | User>;
}
