import { Elysia } from "elysia";
import { root } from "./root";
import { health } from "./health";

export const routes = new Elysia()
  .use(root)
  .use(health);