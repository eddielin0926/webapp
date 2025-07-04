import { Hono } from "hono";

const helloRoute = new Hono().get("/", (c) => {
  return c.text("Hello Hono!");
});

export default helloRoute;
