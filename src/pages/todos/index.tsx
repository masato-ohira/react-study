import type { NextPage } from 'next'

// components
import { Text } from '@chakra-ui/react'
import { TodoForm, TodoList, TodoAdd } from '@/components'

const Todos: NextPage = () => {
  return (
    <>
      <Text fontSize={'4xl'} fontWeight={'bold'} mb={5}>
        TODO-APP
      </Text>
      <TodoAdd />
      <TodoForm />
      <TodoList />
    </>
  )
}

export default Todos
