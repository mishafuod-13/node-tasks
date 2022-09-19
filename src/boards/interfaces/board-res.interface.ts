import { IColumnReq } from './column-req.inteface';
export interface IBoardRes {
  id: string;
  title: string;
  columns: Array<IColumnReq | never>;
}
