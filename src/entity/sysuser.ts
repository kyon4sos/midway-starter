import { BaseTable } from '@midwayjs/sequelize';
import { Column, Model } from 'sequelize-typescript';

@BaseTable
export class SysUser extends Model {
  @Column
  username: string;
  @Column
  password: string;
  @Column
  nickname: string;
  @Column
  email: string;
  @Column
  phone: string;
}
