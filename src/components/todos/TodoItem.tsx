import dayjs from 'dayjs'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { todoState, modalState } from '@/store/todos'
import { useForm } from 'react-hook-form'
import { getTodos, deleteTodo, updateTodo } from '@/gql/todos'

import {
  Button,
  Switch,
  Td,
  Tr,
  FormControl,
  Text,
  HStack,
  Input,
} from '@chakra-ui/react'

export type TodoProps = {
  id: string
  title: string
  done: boolean
  content: string
  createdAt: string
  updatedAt: string
}

export const TodoItem = (props: TodoProps) => {
  // data
  const [loading, setLoading] = useState(false)
  const [todos, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)
  const [modal, setModal] = useRecoilState(modalState)

  // hook-form
  const { register, setValue, watch } = useForm()

  // mounted
  useEffect(() => {
    setValue('done', props.done)
  }, [todos])

  // methods
  // ------------------------------
  const checkAction = async (e: any) => {
    setLoading(true)
    setValue('done', e.target.checked)
    await updateTodo({
      id: props.id,
      done: watch('done'),
    })
    // リストを更新
    // 更新しないとページ遷移の時に値が変わる
    const todos = await getTodos()
    setTodos(todos)
    setLoading(false)
  }

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
      bgColor={watch('done') ? 'blackAlpha.50' : 'white'}
      css={css`
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: linear;

        ${loading &&
        css`
          opacity: 0.5;
          * {
            user-select: none;
            pointer-events: none;
          }
        `}
      `}
    >
      <Td w={5}>
        <FormControl onChange={checkAction}>
          <Input type={'hidden'} {...register('done')} />
          <Switch isChecked={watch('done')} />
        </FormControl>
      </Td>
      <Td>
        <Text textDecoration={watch('done') ? 'line-through' : 'none'}>
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
        <HStack>
          <Button
            size={'sm'}
            colorScheme={'blue'}
            onClick={() => {
              setModal({
                show: true,
                id: props.id,
              })
            }}
          >
            編集
          </Button>
          <Button size={'sm'} isLoading={loading} onClick={deleteAction}>
            削除
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}
