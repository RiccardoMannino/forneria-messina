import { createClient, SupabaseClient } from '@supabase/supabase-js'

export type TypedSupabaseClient = SupabaseClient
let client: TypedSupabaseClient | undefined

export function getSupabaseBrowserClient() {
  if (client) {
    return client
  }
  client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  )

  return client
}
