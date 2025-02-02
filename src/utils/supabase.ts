import { createClient, SupabaseClient } from '@supabase/supabase-js'

export type TypedSupabaseClient = SupabaseClient
let client: TypedSupabaseClient | undefined

export function getSupabaseBrowserClient() {
  if (client) {
    return client
  }
  client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  return client
}
