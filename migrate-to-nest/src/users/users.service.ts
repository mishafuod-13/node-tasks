import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {IUserParams} from './interfaces/user-params.interface'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async update (id: string, newUserDto:IUserParams): Promise<User> {
    const result:User|undefined = await this.usersRepository.findOne(id);
    if (result !== undefined ) {
      await this.usersRepository.update(id, newUserDto);
      return this.findOne(id)
    }
  }

  async create (createUserDto: IUserParams): Promise<User> {
    const newUser = new User (createUserDto)
    await this.usersRepository.save(newUser);
    return newUser
  }
  

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}