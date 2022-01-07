import { BaseEntity } from './../base/base-entity';
import { BaseTable } from '@midwayjs/sequelize';
import { AutoIncrement, Column, PrimaryKey } from 'sequelize-typescript';

@BaseTable
export class SysUser extends BaseEntity {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
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
