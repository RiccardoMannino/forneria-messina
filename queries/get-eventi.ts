import { TypedSupabaseClient } from '@/utils/supabase'

export function getEventi(client: TypedSupabaseClient) {
  return client.from('eventi').select('*')
}
