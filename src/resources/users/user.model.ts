
import { v4 as uuid } from "uuid";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ViewEntity, ViewColumn} from "typeorm";

export interface IUserResponse {
  id: string;
  name: string;
  login: string;
}
export interface IUser {
  id: string;
  name:string;
  login:string;
  password?:string;

}


@Entity({name: "users"})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?:string;

  @Column()
  name:string;

  @Column()
  login:string;

  @Column()
  password?:string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {} as IUser) {
    super();
    this.id = id,
    this.name = name;
    this.login = login;
    this.password = password;
  }

}

@ViewEntity({
  name:'UserView',
  expression: `
  SELECT "id", "name", "login"
  FROM "users" 
  `
})

export class UserView {
  @ViewColumn()
  id!: string;

  @ViewColumn()
  name!: string;

  @ViewColumn()
  login!:string;
  
}

module.exports.User = User;