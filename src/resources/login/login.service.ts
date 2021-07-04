import { getManager } from "typeorm";
import bcrypt from 'bcrypt';
import { User, IUser } from "../users/user.model";

async function checkAuthenticateUser(user: IUser):Promise<false|User> {
    const { login, password } = user;
    const userRepository = getManager().getRepository(User);
    const findRes = await userRepository.findOne({login});
    if (findRes && await bcrypt.compare(String(password), String(findRes?.password))) {
        return findRes;
    }
    return false;
}

export default checkAuthenticateUser;