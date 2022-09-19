import { getManager } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../users/entities/user.entity';
const { USER_ADMIN_LOGIN, USER_ADMIN_PASSWORD } = process.env;

async function checkUserAdminExist(): Promise<true | 'OK'> {
  const entityManager = getManager();
  const check = await entityManager.findOneBy(User, {
    login: USER_ADMIN_LOGIN,
    password: USER_ADMIN_PASSWORD,
  });
  if (check !== undefined) {
    return true;
  }
  if (USER_ADMIN_PASSWORD !== undefined && USER_ADMIN_PASSWORD !== undefined) {
    const newUser = new User({
      name: 'ADMIN',
      login: USER_ADMIN_LOGIN,
      password: USER_ADMIN_PASSWORD,
      id: uuid(),
    });
    await entityManager.save(User, newUser);
    return 'OK';
  }
}

export default checkUserAdminExist;
