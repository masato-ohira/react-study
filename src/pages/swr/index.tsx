import useSWR from 'swr'
import axios from 'axios'
import { Box, HStack, Stack } from '@chakra-ui/react'

type TodoProps = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const SwrPage = () => {
  const { data, error }: { data: any; error: any } = useSWR(
    `https://jsonplaceholder.typicode.com/todos`,
    axios,
  )
  const isLoading = !error && !data
  const isError = error

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Stack spacing={4}>
      {data.data.map((i: TodoProps) => {
        return (
          <Box key={i.id} shadow={'md'} p={4}>
            <HStack>
              <div>{i.id}</div>
              <div>{i.title}</div>
            </HStack>
          </Box>
        )
      })}
    </Stack>
  )
}

export default SwrPage
