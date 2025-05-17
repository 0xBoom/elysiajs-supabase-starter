import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE } = process.env;

export const supabase = createClient<Database>(
  SUPABASE_URL!,
  SUPABASE_SERVICE_ROLE!
);

// npx supabase gen types typescript --local > ./src/libs/supabase/types.ts
