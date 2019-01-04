/*
 * @Author: 汤米猫 
 * @Date: 2019-01-04 08:45:34 
 * @Last Modified by: 汤米猫
 * @Last Modified time: 2019-01-04 17:20:19
 */

import * as Router from "koa-router";
import { Utils } from "./utils";
import { DB } from "./dbs";

export let jobs = new Router();

jobs.all('/jobs/**', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    await next();
});

jobs.get('/jobs/getCount', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let res = await DB.queryCount('jobs');
    ctx.body = {
        code: 1,
        msg: "success",
        val: res
    };
})

jobs.get('/jobs/getAllJobs', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let res = await DB.query('jobs');
    ctx.body = {
        code: 1,
        msg: "success",
        val: res
    };
});

/**
 * 增加一条职位数据
 */
jobs.post('/jobs/addJob', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let title = ctx.request.body.title;
    let position = ctx.request.body.position;
    let job_describe = ctx.request.body.job_describe;
    let job_requirement = ctx.request.body.job_requirement;
    
    let res = await DB.insert('jobs', {
        title,
        position,
        job_describe,
        job_requirement,
        createtime: new Date().getTime(),
        id: Utils.createGuid()
    });
    ctx.body = {
        code: 1,
        msg: "success",
        val: res
    };
});

/**
 * 删除
 */
jobs.post('/jobs/delete', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let id = ctx.request.body.id;
    if (!id) {
        ctx.body = {
            code: 0,
            msg: "没有查到id值",
        };
        return;
    }
    let res = await DB.delete('jobs', { id });
    ctx.body = {
        code: 1,
        msg: "success",
        val: res
    };
});

// 更新一条数据
jobs.post('/jobs/update', async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    let id = ctx.request.body.id;
    let title = ctx.request.body.title;
    let position = ctx.request.body.position;
    let job_describe = ctx.request.body.job_describe;
    let job_requirement = ctx.request.body.job_requirement;
    let createtime = new Date().getTime();
    if (!id || !title || !position || !job_describe || !job_requirement) {
        ctx.body = {
            code: 0,
            msg: "传值不完整",
        };
        return;
    }
    let res = await DB.update('jobs', { id }, {
        id,
        title,
        position,
        job_describe,
        job_requirement,
        createtime
    });
    ctx.body = {
        code: 1,
        msg: "success",
        val: res
    };
});