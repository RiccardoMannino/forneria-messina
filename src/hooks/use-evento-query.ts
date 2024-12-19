import useSupabase from '@/hooks/useSupabase'
import { useQuery } from '@tanstack/react-query'
import { getSingleEvent } from '../../queries/get-single-event'

function useEventoQuery(slug: string) {
  const client = useSupabase()
  const queryKey = ['evento', slug]

  const queryFn = async () => {
    const result = await getSingleEvent(client, slug) // Chiama la funzione per ottenere il singolo evento
    if (result.error) {
      throw new Error(result.error.message)
    }
    return result.data
  }

  return useQuery({ queryKey, queryFn })
}

export default useEventoQuery
