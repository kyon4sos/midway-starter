import { Provide } from '@midwayjs/decorator';
import { Context, IWebMiddleware } from '@midwayjs/web';

@Provide()
export class ErrorHandlerMiddleware implements IWebMiddleware {
  public resolve() {
    return async (ctx: Context, next): Promise<void> => {
      try {
        await next();
        if (ctx.status === 404)
          ctx.body = { header: { status: 404, message: 'not found' } };
      } catch (error) {
        const { code = 400, msg = 'error' } = error;
        ctx.body = { code, msg };
      }
    };
  }
}
