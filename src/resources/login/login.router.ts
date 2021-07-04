import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import  JWT_SECRET_KEY   from '../../common/config';
import  checkAuthenticateUser from "./login.service";

const HandleError = require('../../middleware/handleerrors')

const router = express.Router();

router.route('/login').post(async (req: Request, res: Response) => {
    const user = req.body;
    const checkUser = await checkAuthenticateUser(user);
    if (checkUser) {
        const userResult = { userId: checkUser.id, login: checkUser.login };
        const jwtToken = jwt.sign(userResult, String(JWT_SECRET_KEY));
        return res.status(200).json({token: jwtToken});
    }
    throw HandleError.Forbidden
});


module.exports = router;