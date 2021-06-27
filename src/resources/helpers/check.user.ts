import { getManager, createConnection} from "typeorm";
import { User } from "../users/user.model";
import { v4 as uuid } from "uuid";
const dotenv = require('dotenv');
const PATH = require('path');

dotenv.config({
  path: PATH.join(__dirname, '../../../.env')
});

const HandleError = require('../../middleware/handleerrors')

const {
    USER_ADMIN_PASSWORD,
    USER_ADMIN_LOGIN
  } = process.env;

async function checkUserAdminExist () {
    await createConnection();
    const entityManager = getManager();
    const check = await entityManager.findOne(User, {login: USER_ADMIN_LOGIN, password: USER_ADMIN_PASSWORD })
    if (check !== undefined){
        return true;
    }
    if (USER_ADMIN_PASSWORD !== undefined && USER_ADMIN_LOGIN !== undefined){
        const newUser = new User({name: "ADMIN", login: USER_ADMIN_LOGIN, password: USER_ADMIN_PASSWORD, id: uuid() })
        await entityManager.save(User, newUser);
        return 'OK'
    }
    throw HandleError.ServerError
}

export default checkUserAdminExist
