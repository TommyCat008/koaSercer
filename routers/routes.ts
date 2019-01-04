/*
 * @Author: 汤米猫 
 * @Date: 2018-12-29 10:40:41 
 * @Last Modified by: 汤米猫
 * @Last Modified time: 2019-01-04 10:38:25
 */

import * as Koa from "koa";

// import { news } from "./news";
// import { homeRouter } from "./home";
import { jobs } from './jobs';


export function routerIndex(app: Koa) {
    // app.use(news.routes());
    app.use(jobs.routes());
}