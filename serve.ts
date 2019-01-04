import * as Koa from "koa";

// 引入配置文件
import { serveConfig } from './routers/config';

// 引入路由
import { routerIndex } from './routers/routes';

import { DB } from './routers/dbs'

/**
 * 创建Koa对象
 */
let app = new Koa();

/**
 * 配置
 */
serveConfig(app);

/**
 * 调用路由
 */
routerIndex(app);

// 连接数据库
DB.connect();

app.listen(3000);

// 捕获系统未处理异常
// uncaughtException
process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
});

// unhandledRejection
process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

