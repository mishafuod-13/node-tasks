import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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