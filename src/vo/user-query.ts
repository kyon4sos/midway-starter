import { CreateApiPropertyDoc } from '@midwayjs/swagger';
import { PageInfo } from './page';

export class UserQuery extends PageInfo {
  @CreateApiPropertyDoc('username')
  username: string;
}
