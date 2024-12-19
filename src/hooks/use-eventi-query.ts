import useSupabase from '@/hooks/useSupabase'
import { getEventi } from '../../queries/get-eventi'
import { useQuery } from '@tanstack/react-query'

function useEventiQuery() {
  const client = useSupabase()
  const queryKey = ['eventi']

  const queryFn = async () => {
    return getEventi(client).then((result) => result.data)
  }

  return useQuery({ queryKey, queryFn })
}

export default useEventiQuery
