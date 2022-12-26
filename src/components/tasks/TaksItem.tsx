import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { deleteTask, queryTodos } from '@/gql/tasks'
import { useQuery } from '@/hooks/useQuery'
import { useSWRConfig } from 'swr'
import { useState } from 'react'

export type TaskType = {
  id: string
  title: string
}

export const TaksItem = (props: TaskType) => {
  const [loading, setLoading] = useState(false)
  const { page } = useQuery()
  const { mutate } = useSWRConfig()

  const deleteFunc = async () => {
    if (confirm('削除してよろしいですか？')) {
      setLoading(true)
      await deleteTask({ id: props.id })
      mutate(queryTodos({ page }))
      setLoading(false)
    }
  }

  return (
    <Box shadow={'md'} p={3}>
      <Text mb={2}>{props.title}</Text>
      <HStack justifyContent={'right'}>
        <Button isLoading={loading} size={'sm'} onClick={deleteFunc}>
          削除
        </Button>
      </HStack>
    </Box>
  )
}
