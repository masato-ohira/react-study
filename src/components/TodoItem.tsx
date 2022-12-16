import { todoState } from '@/store/todos'
import { Button, Switch, Td, Tr, FormControl, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { getTodos, deleteTodo, updateTodo } from '@/gql/todos'
import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useRecoilState } from 'recoil'

export type TodoProps = {
  id: string
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
}

export const TodoItem = (props: TodoProps) => {
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)

  useEffect(() => {
    setChecked(props.done)
  }, [])

  const deleteAction = async () => {
    if (confirm('削除してよろしいですか？')) {
      try {
        setLoading(true)
        // TODOを削除
        await deleteTodo({
          id: props.id,
        })
        // リストを更新
        const todos = await getTodos()
        setTodos(todos)
        setLoading(false)
      } catch (error) {
        console.log({ error })
      }
    }
  }

  return (
    <Tr
      bgColor={checked ? 'blackAlpha.50' : 'white'}
      css={css`
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: linear;
      `}
    >
      <Td w={5}>
        <FormControl
          onChange={async (e: any) => {
            setChecked(e.target.checked)
            await updateTodo({
              id: props.id,
              done: e.target.checked,
            })
          }}
        >
          <Switch defaultChecked={props.done} />
        </FormControl>
      </Td>
      <Td>
        <Text textDecoration={checked ? 'line-through' : 'none'}>
          {props.title}
        </Text>
      </Td>
      <Td w={5} whiteSpace={'nowrap'}>
        {dayjs(props.createdAt).format('YYYY/MM/DD HH:mm')}
      </Td>
      <Td w={5} whiteSpace={'nowrap'}>
        {dayjs(props.updatedAt).format('YYYY/MM/DD HH:mm')}
      </Td>
      <Td w={5}>
        <Button size={'sm'} isLoading={loading} onClick={deleteAction}>
          削除
        </Button>
      </Td>
    </Tr>
  )
}
