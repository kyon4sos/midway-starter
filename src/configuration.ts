import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as jwt from '@midwayjs/jwt';
import * as passport from '@midwayjs/passport';
import * as sequlize from '@midwayjs/sequelize';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [jwt, passport, sequlize, swagger],
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
