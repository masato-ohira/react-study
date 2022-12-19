import { useEffect } from 'react'

import { getTodoList } from '@/gql/todos'
import { useRecoilState } from 'recoil'
import { todoState } from '@/store/todos'

// components
import { Table, TableContainer, Tbody, Tr, Th, Thead } from '@chakra-ui/react'
import { TodoItem, TodoProps } from '@/components'

export const TodoList = () => {
  // data
  const [todos, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)

  // mounted
  useEffect(() => {
    const init = async () => {
      const todos = await getTodoList()
      setTodos(todos)
    }
    init()
  }, [])

  // components
  const todoList = todos.map((i: TodoProps) => {
    return <TodoItem key={i.id} {...i}></TodoItem>
  })

  return (
    <>
      <TableContainer>
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
      </TableContainer>
    </>
  )
}
