import { Model } from 'sequelize-typescript';

export class BaseEntity extends Model {
  count() {
    return BaseEntity.count();
  }
}
