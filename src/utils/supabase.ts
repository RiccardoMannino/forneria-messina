import { createClient, SupabaseClient } from '@supabase/supabase-js'

export type TypedSupabaseClient = SupabaseClient
let client: TypedSupabaseClient | undefined

export function getSupabaseBrowserClient() {
  client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  )

  return client
}
