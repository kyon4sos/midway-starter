// src/middleware/notfound-handler.ts

import { Provide } from '@midwayjs/decorator';

@Provide('notfoundHandler')
export class NotFoundHandlerMiddleware {
  resolve() {
    return async function notFoundHandler(ctx, next) {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { code: 404, error: 'Not Found' };
        } else {
          ctx.body = '<h1>Page Not Found</h1>';
        }
      }
    };
  }
}
