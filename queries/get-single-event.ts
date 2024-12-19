import { TypedSupabaseClient } from '@/utils/supabase'

export function getSingleEvent(client: TypedSupabaseClient, slug: string) {
  const formattedSlug = slug.replace(/-/g, ' ')
  return client
    .from('eventi')
    .select('*')
    .ilike('titolo', formattedSlug) // Filtra per il titolo che corrisponde allo slug
    .single()
}
