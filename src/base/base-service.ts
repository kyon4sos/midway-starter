import { BaseEntity } from './base-entity';

export class BaseService {
  //   @Inject()
  private entity: BaseEntity;

  constructor(entiy: BaseEntity) {
    this.entity = entiy.;
  }
  page() {
    const { entity } = this;
    return entity.count();
  }
  count() {
    const { entity } = this;
    return entity.count();
  }
}
