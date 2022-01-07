import { BaseEntity } from './base-entity';

export class BaseService {
  //   @Inject()
  private entity: typeof BaseEntity;

  constructor(entiy: typeof BaseEntity) {
    this.entity = entiy;
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
