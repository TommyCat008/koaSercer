
import * as Router from 'koa-router';

export let homeRouter = new Router();

homeRouter.all('/home/**', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {

    await next();
});

homeRouter.get('/home/r1', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    ctx.body = {
        code: "0",
        msg: "r1"
    };
});

homeRouter.post('/home/r1', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    ctx.body = {
        code: "0",
        msg: "r1"
    };
});

homeRouter.all('/home/r2', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    ctx.body = {
        code: "0",
        msg: "r2"
    };
});

