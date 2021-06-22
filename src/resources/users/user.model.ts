import { v4 as uuid } from "uuid";
import {Entity, PrimaryGeneratedColumn, Column, ViewEntity, ViewColumn} from "typeorm";

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
export class User  {

  @PrimaryGeneratedColumn("uuid")
  id?:string;

  @Column()
  name:string;

  @Column()
  login:string;

  @Column()
  password?:string;

  deletedId?:null|string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {} as IUser) {
    this.id = id,
    this.name = name;
    this.login = login;
    this.password = password;
    this.deletedId = null;
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