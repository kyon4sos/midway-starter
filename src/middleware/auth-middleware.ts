import { Config, Provide } from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';

@Provide()
export class AuthMiddleware {
  @Config('whiteList')
  private readonly whiteList: string[];
  //   private readonly PREFIX = 'Bearer';

  resolve() {
    return async (ctx: Context, next) => {
      const { path, header } = ctx;

      if (match(this.whiteList, path)) {
        console.log('match');
        await next();
        return;
      }

      const token = header.authorization || '';
      if (!token) {
        throw { msg: '无效的token' };
      }
    };
  }
}

function match(paths: string[], path: string): boolean {
  return paths.indexOf(path) !== -1;
}
