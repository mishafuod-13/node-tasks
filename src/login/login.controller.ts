import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import { LoginService } from './login.service';
import * as jwt from 'jsonwebtoken';
import JWT_SECRET_KEY from '../../common/config';
import { IUser } from '../users/interfaces/user.interface';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() user: IUser) {
    const checkUser = await this.loginService.checkAuthenticate(user);
    if (checkUser) {
      const userResult = { userId: checkUser.id, login: checkUser.login };
      const jwtToken = jwt.sign(userResult, String(JWT_SECRET_KEY));
      return { token: jwtToken };
    }
    throw new ForbiddenException();
  }
}
