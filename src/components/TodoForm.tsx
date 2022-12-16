import { get } from 'lodash-es'
import { useState } from 'react'
import { todoState } from '@/store/todos'

import { getTodos, addTodo } from '@/gql/todos'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

import {
  HStack,
  Input,
  Button,
  Box,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react'
import { TodoProps } from '@/components'

export const TodoForm = () => {
  // data
  const [todos, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)
  const [loading, setLoading] = useState(false)

  // hook-form
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const hasError = get(errors, 'title') ? true : false
  const getErrorMsg = (key: string) => {
    return <>{get(errors, `${key}.message`)}</>
  }

  // methods
  const onSubmit = async () => {
    if (watch('title')) {
      setLoading(true)
      // フォームを送信
      await addTodo({
        title: watch('title'),
      })

      // フォーム完了後、一覧を更新
      const todos = await getTodos()
      setTodos(todos)

      // 入力内容をクリア
      setValue('title', '')
      setLoading(false)
    } else {
      console.log('NG')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={5}>
        <FormControl isInvalid={hasError}>
          <HStack>
            <Input
              maxW={'lg'}
              isReadOnly={loading}
              placeholder={'TODOタイトルを入力'}
              {...register('title', {
                required: 'タイトルは必須項目です',
              })}
            />
            <Button type='submit' colorScheme={'blue'} isLoading={loading}>
              ADD
            </Button>
          </HStack>
          {hasError && (
            <FormErrorMessage>{getErrorMsg('title')}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </form>
  )
}
