import { Hono } from "hono";
import { Greet } from "./greet.mariadb.js";
const greet = new Hono();
greet.get('/regards', async (c) => c.json(await Greet.findAll()));
greet.get('/greet/:id  ', async (c) => (await Greet.findByID(Number(c.req.param('id')))));
greet.post('/greet', async (c) => {
    const param = await c.req.json();
    const result = await Greet.create(param);
    return c.json(result, 201);
});
greet.delete('/greet/:id', async (c) => {
    const id = Number(c.req.param('id'));
    const deleted = await Greet.delete(id);
    return deleted
        ? c.text('Deleted successfully', 200)
        : c.text('Greet not found', 404);
});
greet.put('/greet/:id', async (c) => {
    const id = Number(c.req.param('id'));
    const param = await c.req.json();
    const update = await Greet.update(id, param);
    return update
        ? c.text('Updated successfully', 200)
        : c.text('Greet not found', 404);
});
export default greet;
