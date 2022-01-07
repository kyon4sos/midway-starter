import { UserVo } from '../vo/user-register';
import { UserService } from './../service/user';
import {
  ALL,
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Provide,
} from '@midwayjs/decorator';
import { CreateApiDoc } from '@midwayjs/swagger';
import { BaseController } from './base';

@Provide()
@Controller('/user')
export class UserController extends BaseController {
  @Inject()
  userService: UserService;

  @CreateApiDoc().summary('获取用户').build()
  @Get()
  async index() {
    return this.userService.findAll();
  }

  @CreateApiDoc().summary('注册').param('注册参数').build()
  @Post('/register')
  async register(@Body(ALL) userInfo: UserVo) {
    const user = await this.userService.save(userInfo);
    return this.ok({ data: user, code: 4000 });
  }
}
