import { Provide, Post, Inject, Controller } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';

@Provide()
@Controller('/')
export class JwtController {
  @Inject()
  jwt: JwtService;

  @Inject()
  ctx: any;

  @Post('/passport/jwt', { middleware: ['jwtPassportMiddleware'] })
  async jwtPassport() {
    console.log('jwt user: ', this.ctx.req.user);
    return this.ctx.req.user;
  }

  @Post('/jwt')
  async genJwt() {
    return {
      t: await this.jwt.sign({ msg: 'Hello Midway' }),
    };
  }
}
