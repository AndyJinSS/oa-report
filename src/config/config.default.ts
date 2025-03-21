import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1742525250912_611',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'postgres',
        host: '127.0.0.1',
        username: 'andy',
        database: 'oa',
        synchronize: true,         // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
        // 支持如下的扫描形式，为了兼容我们可以同时进行.js和.ts匹配
        entities: [
          'entity',                 // 特定目录
          '**/*.entity.{j,t}s',     // 通配加后缀匹配
        ]
      }
    }
  },
} as MidwayConfig;
