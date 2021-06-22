import {ViewEntity, ViewColumn} from 'typeorm';


@ViewEntity({
    name:'UserView',
    expression: `
    SELECT "id", "name", "login"
    FROM "users" 
    `
  })
  
  export default class UserView {
    @ViewColumn()
    id!: string;
  
    @ViewColumn()
    name!: string;
  
    @ViewColumn()
    login!:string;
    
  }