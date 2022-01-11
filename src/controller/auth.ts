import { JwtService } from '@midwayjs/jwt';
import {
  ALL,
  Body,
  Controller,
  Inject,
  Post,
  Provide,
} from '@midwayjs/decorator';
import { CreateApiDoc } from '@midwayjs/swagger';
import { UserLogin, UserVo } from '../vo/user';
import { UserService } from './../service/user';
import { BaseController } from '../base/base-controller';
import { Brcypt } from '../util/brcypt';

@Provide()
@Controller('/api')
export class AuthController extends BaseController {
  @Inject()
  jwtService: JwtService;

  @Inject()
  userService: UserService;

  @Inject()
  bcrypt: Brcypt;

  @CreateApiDoc().summary('登录').param('登录参数').build()
  @Post('/login')
  async login(@Body(ALL) login: UserLogin) {
    const user = await this.userService.findByUsername(login.username);
    if (!user) {
      this.fail({ msg: '用户名或密码错误' });
      return;
    }
    const match = await this.bcrypt.match(login.password, user.password);
    if (!match) {
      this.fail({ msg: '用户名或密码错误' });
      return;
    }
    this.ok({ data: user });
  }

  @CreateApiDoc().summary('注册').param('注册参数').build()
  @Post('/register')
  async register(@Body(ALL) userInfo: UserVo) {
    let exist = await this.userService.findByUsername(userInfo.username);
    if (exist) {
      return this.fail({ msg: '用户名已经注册' });
    }
    exist = await this.userService.findByNickname(userInfo.nickname);
    if (exist) {
      return this.fail({ msg: '昵称已经注册' });
    }
    exist = await this.userService.findByEmail(userInfo.email);
    if (exist) {
      return this.fail({ msg: '邮箱已经注册' });
    }
    exist = await this.userService.findByPhone(userInfo.phone);
    if (exist) {
      return this.fail({ msg: '手机已经注册' });
    }
    userInfo.password = await this.bcrypt.hash(userInfo.password);
    const user = await this.userService.save(userInfo);
    const token = await this.jwtService.sign({ sub: user.id });
    const data = { user, token };
    return this.ok({ data });
  }
}
