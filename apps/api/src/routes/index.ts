import { Hono } from "hono";
import helloRoute from "./hello";

const routes = new Hono().route("/hello", helloRoute);

export default routes;
