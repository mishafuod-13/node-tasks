import { IColumnReq } from './column-req.inteface';

export interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumnReq>;
}
