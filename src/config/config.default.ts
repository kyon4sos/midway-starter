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

export const onerror = {
  all(err, ctx) {
    // 在此处定义针对所有响应类型的错误处理方法
    // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    ctx.body = 'error';
    ctx.status = 500;
  },
  html(err, ctx) {
    // html hander
    ctx.body = '<h3>error</h3>';
    ctx.status = 500;
  },
  json(err, ctx) {
    // json hander
    ctx.body = { message: 'error' };
    ctx.status = 500;
  },
  jsonp(err, ctx) {
    // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
  },
};
export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;
  config.whiteList = ['/api/login', '/home', '/swagger-ui', '/test'];
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1641522387324_2807';

  // add your config here
  config.middleware = [
    'notfoundHandler',
    'authMiddleware',
    'errorHandlerMiddleware',
  ];

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
