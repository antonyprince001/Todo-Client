import { rest } from "msw";
import { setupServer } from "msw/node";

let todoUrl = 'http://localhost:8080/api/v1/todos';

const handlers = [

    rest.get(todoUrl, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, description: "NEEV", completed: false, priority: true },
                { id: 2, description: "TWARAN", completed: true, priority: true },
            ])
        );
    }),
    rest.get(todoUrl+"/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, description: "NEEV", completed: false, priority: true },
            ])
        );
    }),
    rest.post(todoUrl, (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json([
                { id: 1, description: "NEEV", completed: false, priority: true }
            ])
        );
    }),
    rest.put(todoUrl+"/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, description: "NEEV", completed: true, priority: true },
            ])
        );
    }),
    rest.delete(todoUrl+"/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, description: "NEEV", completed: false, priority: true },
            ])
        );
    }),


]

export const todoErrorResponse = rest.get(todoUrl+"/0", (req, res, ctx) => {
    return res(ctx.status(400));
});

export const server = new setupServer(...handlers);
