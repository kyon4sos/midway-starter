import { Provide } from '@midwayjs/decorator';
import { UserVo } from '../vo/user-register';
import { SysUser } from '../entity/sysuser';

@Provide()
export class UserService {
  async findAll() {
    return SysUser.findAll();
  }

  async save(userInfo: UserVo) {
    const user = SysUser.build({ ...userInfo });
    user.save();
    return user;
  }
}
