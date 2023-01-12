import { useTodoList } from '@/gql/tasks'
import { useQuery } from '@/hooks/useQuery'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useListHook = () => {
  const router = useRouter()
  const [count, setCount] = useState(0)
  const { page: thisPage } = useQuery()
  const { data, error, isLoading } = useTodoList({ page: thisPage })

  useEffect(() => {
    if (data) {
      setCount(data.todosConnection.aggregate.count)
    }
  }, [data])

  return {
    router,
    count,
    setCount,
    thisPage,
    data,
    error,
    isLoading,
  }
}
