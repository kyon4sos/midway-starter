import { CreateApiPropertyDoc } from '@midwayjs/swagger';

export class PageInfo {
  @CreateApiPropertyDoc('size')
  size: number;
  @CreateApiPropertyDoc('page')
  page: number;
}
