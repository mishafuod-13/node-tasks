
const { v4: uuidv4 } = require('uuid');

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

export interface IUserResponse {
  id:string;
  name:string;
  login: string;
}

export interface IUser {
  id:string;
  name:string;
  login:string;
  password?:string;
  toResponse():IUserResponse;
  
}

@Entity()

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:string;
  @Column()
  name:string;
  @Column()
  login:string;
  @Column()
  password?:string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {} as IUser) {
    super();
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  async toResponse ():Promise<IUserResponse> {
    const { id, name, login }:IUserResponse = this;
    return { id, name, login };
  }  
}


module.exports.User = User;