import { Inject, Controller, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  // @Post('/get_user')
  // async getUser(@Query() uid: string): Promise<IGetUserResponse> {
  //   const user = await this.userService.getUser({ uid });
  //   return { success: true, message: 'OK', data: user };
  // }
}
