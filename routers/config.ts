/**
 * 服务器基础配置
 */

import * as Koa from "koa";
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';

/**
 * 服务配置
 */
export function serveConfig(app: Koa) {

    /**
    * 全局路由错误处理
    */
    app.use(async function (ctx: Router.IRouterContext, next: () => Promise<any>) {
        return next().catch((err) => {
            ctx.body = {
                code: err.status || 500,
                msg: err.message || "未捕获异常或未满足流程"
            };
        });
    });

    let baseRouter = new Router();
    app.use(baseRouter.allowedMethods());

    /**
    * 全局跨域
    */
    app.use(async (ctx: Router.IRouterContext, next: () => Promise<any>) => {

        ctx.set("Access-Control-Allow-Origin", "*");
        ctx.set("Access-Control-Allow-Headers", "X-HTTP-Method-Override,Origin,X-Requested-With,Content-Type,Accept,Authorization");
        ctx.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

        let start = new Date();
        await next();
        // 和上边定义的start变量计算请求耗时
        let ms = new Date().getTime() - start.getTime();
        ctx.set('X-Response-Time', ms + 'ms');
    });

    /**
     * 添加全局的BodyParser
     */
    let bodyParserOptions = {
        formLimit: "32mb",
        jsonLimit: "32mb",
        textLimit: "32mb",
        onerror: function (err: Error, ctx: Koa.Context) {
            ctx.throw('body parse error', 422);
        }
    };
    app.use(bodyparser(bodyParserOptions));

}

