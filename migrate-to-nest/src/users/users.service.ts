import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import Memory from '../../common/delete.memory'
import {IUserParams} from './interfaces/user-params.interface'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  wrap (userDto: User):IUserParams {
    const {login, id, name} = userDto;
    return  {login, id, name};
  }

  async findAll(): Promise<IUserParams[]> {
    return this.usersRepository.find().then(users => users.map(user =>this.wrap(user)));
  }

  async update (id: string, newUserDto:IUserParams): Promise<IUserParams> {
    const result:User|undefined = await this.usersRepository.findOne(id);
    if (result !== undefined ) {
      await this.usersRepository.update(id, newUserDto);
      return this.usersRepository.findOne(id).then(user => this.wrap(user))
    }
    throw new NotFoundException()
  }

  async create (createUserDto: IUserParams): Promise<IUserParams> {
    const newUser = new User (createUserDto)
    await this.usersRepository.save(newUser)
    return this.wrap(newUser)
  }

  async findOne(id: string): Promise<IUserParams> {
    const result = await this.usersRepository.findOne(id);
    if (result) {
      return this.wrap(result)
    }
    throw new NotFoundException();
  }

  async remove(id: string): Promise<'OK'> {
    const result = await this.usersRepository.findOne(id)
    if (result){
      Memory.setUserId(id as string);
      await this.usersRepository.delete(id);
      return "OK"
    }
    throw new UnauthorizedException();
  }
}