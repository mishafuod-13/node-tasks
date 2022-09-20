import { v4 as uuid } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  deletedId?: null | string;

  constructor(
    {
      id = uuid(),
      name = 'USER',
      login = 'user',
      password = 'P@55w0rd',
    } = {} as IUser,
  ) {
    (this.id = id), (this.name = name);
    this.login = login;
    this.password = password;
    this.deletedId = null;
  }
}
