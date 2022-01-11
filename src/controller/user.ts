import { JwtService } from '@midwayjs/jwt';

import {
  ALL,
  Controller,
  Get,
  Inject,
  Provide,
  Query,
} from '@midwayjs/decorator';
import { CreateApiDoc } from '@midwayjs/swagger';
import { BaseController } from '../base/base-controller';
import { UserQuery } from './../vo/user-query';
import { UserService } from './../service/user';

@Provide()
@Controller('/api', { middleware: ['jwtPassportMiddleware'] })
export class UserController extends BaseController {
  @Inject()
  jwtService: JwtService;
  @Inject()
  userService: UserService;

  @CreateApiDoc().summary('获取用户').build()
  @Get('/sysuser', { middleware: ['jwtPassportMiddleware'] })
  async index(@Query(ALL) user: UserQuery) {
    const { page, size } = user;
    const users = await this.userService.findPage({ page, size });
    this.page(users);
  }
}
