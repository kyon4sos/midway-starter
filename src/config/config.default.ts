import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export const jwt = {
  secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')
  expiresIn: '2d', // https://github.com/vercel/ms
};

export const cors = {
  // {string|Function} origin: '*',
  // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};

export const sequelize = {
  options: {
    database: 'webapi',
    username: 'root',
    password: '123456',
    host: 'localhost', // 此处支持idb上面vipserver key的那种方式，也支持aliyun的地址。
    port: 3306,
    encrypt: false,
    dialect: 'mysql',
    define: { charset: 'utf8' },
  },
};

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1641522387324_2807';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // config.security = {
  //   csrf: false,
  // };

  return config;
};
