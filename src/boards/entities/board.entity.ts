import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  constructor({ id = uuid(), title = 'AAAA' } = {}) {
    this.id = id;
    this.title = title;
  }
}
