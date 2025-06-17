import { Elysia, t } from "elysia";
import { EventController } from "./controllers/EventController";

export const Router = {
    events: new Elysia()
        .post("/api/events", async ({ body }) => {
            return await EventController.create(body);
        }, {
            body: t.Object({
                title: t.String(),
                description: t.Optional(t.String()),
                date: t.String(), // ISO date
            }),
        })
        .get("/api/events", () => EventController.getAll())
        .get("/api/events/:id", ({ params }) => EventController.getById({ id: Number(params.id) }), {
            params: t.Object({
                id: t.String(), // преобразуем в number внутри
            }),
        })
        .delete("/api/events/:id", ({ params }) => EventController.deleteById({ id: Number(params.id) }), {
            params: t.Object({
                id: t.String(),
            }),
        })
};
