import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Scope(ScopeEnum.Singleton)
@Provide()
export class Brcypt {
  match(rawPassword: string, hashPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, hashPassword);
  }
  hash(rawPassword: string): Promise<string> {
    return bcrypt.hash(rawPassword, saltRounds);
  }
}
