import { supabase } from "../libs/supabase/client";

export class HealthService {
  public async checkDatabaseConnection() {
    try {
      const { data, error } = await supabase
        .from("health_check")
        .select("*")
        .limit(1);

      if (error) {
        return {
          status: "error",
          message: "Database connection failed",
          error: error.message,
        };
      }

      return {
        status: "healthy",
        message: "Database connection successful",
        data,
      };
    } catch (err) {
      return {
        status: "error",
        message: "Health check failed",
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }
}

export const healthService = new HealthService();
