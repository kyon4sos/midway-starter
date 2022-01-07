import { Inject } from '@midwayjs/decorator';

export interface Result {
  code?: number;
  msg?: string;
  data?: any;
}

export interface PageResult {
  total: number;
  page: number;
  size: number;
  current?: number;
  result: any[];
}

export abstract class BaseController {
  @Inject()
  private ctx: any;

  protected ok(result: Result) {
    const { ctx } = this;
    const { code = 200, msg = 'ok', data = null } = result;
    ctx.body = {
      code,
      msg,
      data,
    };
  }
  protected page(result: PageResult) {
    this.ok({ data: result });
  }
  protected fail(result: Result) {
    const { ctx } = this;
    const { code = 400, msg = 'error', data = null } = result;
    ctx.body = {
      code,
      msg,
      data,
    };
  }
}
