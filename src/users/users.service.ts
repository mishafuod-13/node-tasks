import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import Memory from '../../common/delete.memory';
import { IUserParams } from './interfaces/user-params.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private wrap = (userDto: User): IUserParams => {
    const { login, id, name } = userDto;
    return { login, id, name };
  };

  findAll = async (): Promise<IUserParams[]> => {
    return this.usersRepository
      .find()
      .then((users) => users.map((user) => this.wrap(user)));
  };

  // eslint-disable-next-line prettier/prettier
  update = async (id: string, newUserDto: IUserParams): Promise<IUserParams> => {
    const result = await this.usersRepository.findOneBy({ id: id });
    if (result !== undefined) {
      await this.usersRepository.update(id, newUserDto);
      return this.usersRepository
        .findOneBy({ id: id })
        .then((user) => this.wrap(user));
    }
    throw new NotFoundException();
  };

  create = async (createUserDto: IUserParams): Promise<IUserParams> => {
    const newUser = new User(createUserDto);
    await this.usersRepository.save(newUser);
    return this.wrap(newUser);
  };

  async findOne(id: string): Promise<IUserParams> {
    const result = await this.usersRepository.findOneBy({ id: id });
    if (result) {
      return this.wrap(result);
    }
    throw new NotFoundException();
  }

  async find(id: string): Promise<User> {
    const result = await this.usersRepository.findOneBy({ id: id });
    if (result) {
      return result;
    }
    throw new NotFoundException();
  }

  async remove(id: string): Promise<'OK'> {
    const result = await this.usersRepository.findOneBy({ id: id });
    if (result) {
      Memory.setUserId(id as string);
      await this.usersRepository.delete(id);
      return 'OK';
    }
    throw new UnauthorizedException();
  }
}
