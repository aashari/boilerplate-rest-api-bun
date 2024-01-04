import { Elysia, NotFoundError } from "elysia";
import { mongoRegister } from "./_mongo";
import { ResponseDTO } from "./type";

import posts from "./posts";

/**
 * Default middleware function for the Elysia application.
 * This middleware sets the "x-request-time" header on the request and logs the HTTP request details.
 * It also handles errors and returns a ResponseDTO with the appropriate status code and error message.
 * 
 * @param app - The Elysia application instance.
 * @returns The modified Elysia application instance.
 */
function defaultMiddleware(app: Elysia) {

    app.onRequest((ctx) => {
        const parsedURL = new URL(ctx.request.url);
        ctx.request.headers.set("x-request-time", Date.now().toString());
        console.log(`[index.ts] 🦊 Got HTTP request on ${ctx.request.method.toUpperCase()} ${parsedURL.pathname}`);
        return;
    });

    app.onError((ctx) => {
        const parsedURL = new URL(ctx.request.url);
        const statusCode = (ctx.error as any)?.status ? (ctx.error as any).status : (ctx.error instanceof NotFoundError ? 404 : 500);
        console.log(`[index.ts] 😨 Got HTTP error ${statusCode} on ${ctx.request.method.toUpperCase()} ${parsedURL.pathname} => [${ctx.error}]`);
        return new ResponseDTO({ statusCode: statusCode, error: ctx.error });
    });

    return app;

}

/**
 * The main application instance.
 */
const app = new Elysia()
    .use(mongoRegister)
    .use(defaultMiddleware)
    .use(posts)
    .get(`/`, () => new ResponseDTO({ statusCode: 200, message: `🤖 🇮🇩 hello world!` }))
    .listen(process.env.PORT || 3000);

console.log(`[index.ts] 🦊 successfully started Elysia server on ${app.server?.hostname}:${app.server?.port}`);