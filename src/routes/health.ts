import { Elysia } from "elysia";
import { healthService } from "../services/healthService";

export const health = new Elysia().group("/health", (app) => {
  return app.get("/", async () => {
    return await healthService.checkDatabaseConnection();
  });
});
