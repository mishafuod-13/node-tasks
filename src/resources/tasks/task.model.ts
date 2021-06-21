import { Entity, PrimaryGeneratedColumn,  Column, BaseEntity} from 'typeorm';
import { v4 as uuid } from "uuid";

export interface ITask {
  id:string;
  title?:string;
  order?:number;
  description?:string;
  userId?:string|null;
  columnId?:string|null;
  boardId?:string|null;
}

@Entity()
export class Task extends BaseEntity  {
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  title?:string;

  @Column()
  order?:number;

  @Column()
  description?:string;

  @Column({
    type: 'uuid',
    nullable: true,
  })
  userId:string|null;

  @Column({
    type: 'uuid',
    nullable: true,
  })
  columnId:string|null;
  
  @Column({
    type: 'uuid',
    nullable: true,
  })
  boardId:string|null;

    constructor ({
      id = uuid(),
      title = 'AAAtyty',
      order = 0,
      description = 'string',
      userId = null,
      columnId = null,
      boardId = null,
    } = {} as ITask) {
      super();
      this.id = id;
      this.title = title;
      this.order = order;
      this.description = description;
      this.userId = userId;
      this.columnId = columnId;
      this.boardId = boardId;
    }
  
}  