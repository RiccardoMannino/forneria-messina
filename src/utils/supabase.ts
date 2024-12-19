import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type TypedSupabaseClient = SupabaseClient;
let client: TypedSupabaseClient | undefined;

export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }
  client = createClient(
    "https://ybehzwtxdvauwihxmbwk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliZWh6d3R4ZHZhdXdpaHhtYndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNzI3MzcsImV4cCI6MjA0NTY0ODczN30.HL0NDujNSBmFYglbXyN04kCRO-okax2YFG0DfIUvZ64",
  );

  return client;
}
