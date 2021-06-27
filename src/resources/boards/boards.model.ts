
import { Entity, PrimaryGeneratedColumn,  Column} from 'typeorm';
import { v4 as uuid } from "uuid";
import {IColumnReq } from './column.model';



export interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumnReq>
}

export interface IBoardRes {
  id: string;
  title: string;
  columns: Array<IColumnReq|never>
}

@Entity()
export class Board   {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title:string;


  constructor({
    id = uuid(),
    title = 'AAAA',
  } = {}) {
    this.id = id;
    this.title = title;
  }
}

