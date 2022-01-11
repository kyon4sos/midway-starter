// jwt-middleware.ts

import { Provide } from '@midwayjs/decorator';
import { PassportMiddleware } from '@midwayjs/passport';
import * as passport from 'passport';
import { JwtStrategy } from './jwt-strategy';

@Provide('jwtPassportMiddleware')
export class JwtPassportMiddleware extends PassportMiddleware(JwtStrategy) {
  getAuthenticateOptions():
    | passport.AuthenticateOptions
    | Promise<passport.AuthenticateOptions> {
    return {
      successMessage: '失败',
      state: '2000',
      failureMessage: '没权限',
      failWithError: true,
    };
  }
}
