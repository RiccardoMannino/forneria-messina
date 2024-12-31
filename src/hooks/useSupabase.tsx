import { useMemo } from 'react'
import { getSupabaseBrowserClient } from '@/utils/supabase'

function useSupabase() {
  return getSupabaseBrowserClient()
}

export default useSupabase
