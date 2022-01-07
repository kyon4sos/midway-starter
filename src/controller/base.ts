import { Inject } from '@midwayjs/decorator';

export interface Result {
  code?: number;
  msg?: string;
  data?: any;
}

export abstract class BaseController {
  @Inject()
  private ctx: any;

  protected ok(result: Result) {
    const { ctx } = this;
    const { code = 200, msg = 'ok', data } = result;
    ctx.body = {
      code,
      msg,
      data,
    };
  }

  protected fail(result: Result) {
    const { ctx } = this;
    const { code = 400, msg = 'error', data } = result;
    ctx.body = {
      code,
      msg,
      data,
    };
  }
}
