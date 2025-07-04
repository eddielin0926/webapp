import { Hono } from "hono";
import routes from "./routes";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

app.basePath("/api").route("/", routes);

export default app;
export type AppType = typeof routes;
