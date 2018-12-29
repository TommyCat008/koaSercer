/*
 * @Author: 汤米猫 
 * @Date: 2018-12-29 10:43:14 
 * @Last Modified by: 汤米猫
 * @Last Modified time: 2018-12-29 13:45:20
 */

import * as Router from 'koa-router';

export let news = new Router();

news.all('/news/**', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {

    await next();
});

news.post('/news/r1', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    ctx.body = {
        code: "0",
        msg: "r1"
    };
});

news.all('/news/r2', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    ctx.body = {
        code: "0",
        msg: "r2"
    };
});
