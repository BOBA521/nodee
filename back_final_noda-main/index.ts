import dotenv from "dotenv";
import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import cors from "@elysiajs/cors";
import { Router } from "./router";

class API {
    constructor() {
        dotenv.config();
        this.useMiddlewares();
        this.useRoutes();
        this.init().then(() => console.log(`Server is running at: ${process.env.PORT}`));
    }

    private app = new Elysia({ adapter: node() });

    private useMiddlewares() {
        this.app.use(cors());
    }

    private useRoutes() {
        this.app.use(Router.events);
    }

    private async init() {
        await this.app.listen(process.env.PORT || 3000);
    }
}

new API();
