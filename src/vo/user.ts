import { Rule, RuleType } from '@midwayjs/decorator';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

export class UserVo {
  @CreateApiPropertyDoc('username')
  @Rule(RuleType.string().required())
  username: string;

  @CreateApiPropertyDoc('password')
  @Rule(RuleType.string().required())
  password: string;
  @CreateApiPropertyDoc('nickname')
  @Rule(RuleType.string().required())
  nickname: string;

  @CreateApiPropertyDoc('email')
  @Rule(RuleType.string().required())
  email: string;

  @CreateApiPropertyDoc('phone')
  @Rule(RuleType.string().required())
  phone: string;
}

export class UserLogin {
  @CreateApiPropertyDoc('username')
  @Rule(RuleType.string().required())
  username: string;

  @CreateApiPropertyDoc('password')
  @Rule(RuleType.string().required())
  password: string;
}
