import { Hono } from "hono";
import { Greet } from "./greet.mariadb.js";
const greet = new Hono();
greet.get('/regards', async (c) => c.json(await Greet.findAll()));
greet.get('/greet/:id', async (c) => {
    const id = Number(c.req.param('id'));
    if (isNaN(id)) {
        return c.text('ID inválido', 400);
    }
    const result = await Greet.findByID(id);
    if (!result) {
        return c.text('Saludo no encontrado', 404);
    }
    return c.json(result, 200);
});
greet.post('/greet', async (c) => {
    try {
        const param = await c.req.json();
        if (!param.greet || !param.language) {
            return c.text("Faltan campos requeridos: 'greet' y 'language'", 400);
        }
        const result = await Greet.create(param);
        return c.json(result, 201);
    }
    catch (error) {
        console.error("Error en POST /greet:", error);
        return c.text("Error interno del servidor", 500);
    }
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
