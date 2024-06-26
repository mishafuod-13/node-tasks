import { Injectable } from '@nestjs/common';
import { getManager , createConnection} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { IUser } from '../users/interfaces/user.interface';

@Injectable()
export class LoginService {
  async checkAuthenticate(user: IUser): Promise<false | User> {
    const { login, password } = user;
    const connection = await createConnection();
    const userRepository = getManager().getRepository(User);
    const findRes = await userRepository.findOneByOrFail({ login: login });
    const compare = await bcrypt.compare(
      String(password),
      String(findRes.password),
    );
    if (
      findRes &&
      (await bcrypt.compare(String(password), String(findRes.password)))
    ) {
      return findRes;
    }
    return false;
  }
}
