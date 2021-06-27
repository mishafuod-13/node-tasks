import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export interface IColumnReq {
  id?: string;
  title?: string;
  order?: number;
}

@Entity()
export class Columns extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order:number;

  @Column()
  boardId:string;

    constructor ({
      id = uuid(),
      title = "Djdsdddsd",
      order = 0,
      boardId = ''
    } = {}) {
      super();
      this.id = id;
      this.title = title;
      this.order = order;
      this.boardId = boardId
    }
}

/* @ViewEntity({
  name:'ColumnsView',
  expression: `
  SELECT "id", "title", "order"
  FROM "columns" 
  `
})

export class ColumnsView {
  @ViewColumn()
  id!: string;
  @ViewColumn()
  title!: string;
  @ViewColumn()
  order!:string;
  
}
*/