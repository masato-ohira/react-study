import type { NextPage } from 'next'
import { useEffect } from 'react'

import { getTodos } from '@/gql/todos'
import { useRecoilState } from 'recoil'
import { todoState } from '@/store/todos'

// components
import { Text, Table, Tbody, Tr, Th, Thead } from '@chakra-ui/react'
import { TodoItem, TodoProps, TodoForm } from '@/components'

const Todos: NextPage = () => {
  const [todos, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)

  useEffect(() => {
    const init = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    init()
  }, [])

  const todoList = todos.map((i: TodoProps) => {
    return <TodoItem key={i.id} {...i}></TodoItem>
  })

  return (
    <>
      <Text fontSize={'4xl'} fontWeight={'bold'} mb={5}>
        TODO-APP
      </Text>
      <TodoForm />
      <Table>
        <Thead>
          <Tr>
            <Th>進捗</Th>
            <Th>タイトル</Th>
            <Th>作成日時</Th>
            <Th>更新日時</Th>
            <Th>操作</Th>
          </Tr>
        </Thead>
        <Tbody>{todoList}</Tbody>
      </Table>
    </>
  )
}

export default Todos
