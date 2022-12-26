import { NextPage } from 'next'
import { Grid } from '@chakra-ui/react'
import { useTodoList, getters } from '@/gql/tasks'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQuery } from '@/hooks/useQuery'

import {
  Paginate,
  LoaderContent,
  TaskAdd,
  TaksItem,
  TaskType,
} from '@/components'

const SwrPage: NextPage = () => {
  const router = useRouter()
  const [count, setCount] = useState(0)
  const { page: thisPage } = useQuery()
  const { data, error, isLoading } = useTodoList({ page: thisPage })
  useEffect(() => {
    if (data) {
      setCount(data.todosConnection.aggregate.count)
    }
  }, [data])

  if (isLoading) return <LoaderContent />
  if (error) return <div>Error</div>
  const items = getters.todos(data)

  return (
    <>
      <TaskAdd />
      <Grid templateColumns={`repeat(4, 1fr)`} gap={4} mb={3}>
        {items.map((i: TaskType) => {
          return <TaksItem key={i.id} {...i} />
        })}
      </Grid>
      <Paginate
        page={thisPage - 1}
        count={count}
        limit={getters.limit}
        handlePageClick={async (n: number) => {
          const page = n + 1
          router.replace({
            query: { page },
          })
        }}
      />
    </>
  )
}

export default SwrPage
