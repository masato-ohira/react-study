import { NextPage } from 'next'
import { Grid } from '@chakra-ui/react'
import { getters } from '@/gql/tasks'
import { useListHook } from './useListHook'

import {
  Paginate,
  LoaderContent,
  TaskAdd,
  TaksItem,
  TaskType,
} from '@/components'

const SwrPage: NextPage = () => {
  const { router, count, thisPage, data, error, isLoading } = useListHook()

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
