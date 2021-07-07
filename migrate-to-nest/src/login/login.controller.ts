import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import { LoginService } from './login.service';
import * as jwt from 'jsonwebtoken';
import JWT_SECRET_KEY from '../../common/config'
import {IUser} from '../users/interfaces/user.interface'
import { User } from 'src/users/entities/user.entity';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() user: IUser) {
  console.log (user)
  const checkUser = await this.loginService.checkAuthenticate(user);
  console.log (checkUser)
    if (checkUser) {
      const userResult = { userId: checkUser.id, login: checkUser.login };
      console.log (userResult)
      const jwtToken = jwt.sign(userResult, String(JWT_SECRET_KEY));
      return {token: jwtToken}
    }
    throw new ForbiddenException()
  }
}


