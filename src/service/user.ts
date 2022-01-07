import { BaseService } from './../base/base-service';
import { Provide } from '@midwayjs/decorator';
import { UserVo } from '../vo/user';
import { SysUser } from '../entity/sysuser';
import { PageInfo } from '../vo/page';

@Provide()
export class UserService extends BaseService {
  constructor() {
    super(SysUser);
  }
  findById(id: string) {
    return SysUser.findByPk(id);
  }
  findByUsername(username: string) {
    return SysUser.findOne({
      where: { username },
    });
  }
  findByPhone(phone: string) {
    return SysUser.findOne({
      where: { phone },
    });
  }
  findByNickname(nickname: string) {
    return SysUser.findOne({
      where: { nickname },
    });
  }
  findByEmail(email: string) {
    return SysUser.findOne({
      where: { email },
    });
  }
  findAll() {
    return SysUser.findAll();
  }
  async findPage(pageInfo: PageInfo) {
    console.log(typeof SysUser);
    const { page = 1, size = 10 } = pageInfo;
    // const count = SysUser.count();
    const total = await this.count();
    const result = await SysUser.findAll({
      limit: size,
      offset: (page - 1) * size,
    });
    // const [total, result] = await Promise.all([count, users]);
    return { total, page, size, result };
  }
  save(userInfo: UserVo) {
    return SysUser.create({ ...userInfo });
  }
}
