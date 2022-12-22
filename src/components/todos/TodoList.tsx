import { useEffect } from 'react'

import { getTodoList } from '@/gql/todos'
import { useRecoilState } from 'recoil'
import { todoState, todoAggregate } from '@/store/todos'
import { sleep } from '@/utils'

// components
import {
  Table,
  TableContainer,
  Tbody,
  Tr,
  Th,
  Thead,
  Box,
} from '@chakra-ui/react'
import { TodoItem, TodoProps, Paginate } from '@/components'
import { useRouter } from 'next/router'

export const TodoList = () => {
  // data
  const [todos, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)
  const [aggregate, setAggregate] = useRecoilState(todoAggregate)
  const router = useRouter()

  // mounted
  const fetchTodo = async (page?: number) => {
    page = page || 1
    const res: any = await getTodoList({
      page,
    })
    await sleep(100)
    setTodos(res.todos)
    setAggregate({
      ...aggregate,
      count: res.count,
      page,
    })
  }

  useEffect(() => {
    if (router.isReady && router.query.page) {
      let num = Number(router.query.page)
      fetchTodo(num)
    } else {
      fetchTodo()
    }
  }, [router.isReady])

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

      {aggregate.count >= aggregate.limit + 1 && (
        <Box mt={3}>
          <Paginate
            page={aggregate.page - 1}
            count={aggregate.count}
            limit={aggregate.limit}
            handlePageClick={async (n: number) => {
              let page = n + 1
              router.push({
                query: { page },
              })
              fetchTodo(page)
            }}
          />
        </Box>
      )}
    </>
  )
}
