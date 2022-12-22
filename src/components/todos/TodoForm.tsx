import { get, map, includes, isString } from 'lodash-es'
import { useEffect, useState } from 'react'
import { todoState, modalState, todoAggregate } from '@/store/todos'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getTodoList, addTodo, updateTodo, getTodo } from '@/gql/todos'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

import {
  HStack,
  Center,
  Input,
  Button,
  Box,
  FormErrorMessage,
  FormControl,
  Stack,
  Textarea,
  Switch,
  FormLabel,
} from '@chakra-ui/react'
import { TodoProps } from '@/components'

export const TodoForm = () => {
  // data
  const router = useRouter()
  const [todos, setTodos]: [TodoProps[], Function] = useRecoilState(todoState)
  const [aggregate, setAggregate] = useRecoilState(todoAggregate)
  const [modal, setModal] = useRecoilState(modalState)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState('add')

  // hook-form
  // ------------------------------
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const hasError = get(errors, 'title') ? true : false
  const isEditMode = mode == 'edit' ? true : false
  const getErrorMsg = (key: string) => {
    return <>{get(errors, `${key}.message`)}</>
  }

  const resetForm = () => {
    const ids = ['title', 'content', 'done']
    map(ids, (id) => {
      setValue(id, undefined)
    })
  }

  // mounted
  // ------------------------------
  useEffect(() => {
    const init = async () => {
      if (
        router.isReady &&
        includes(router.pathname, '/edit') &&
        isString(router.query.id)
      ) {
        const todoID = router.query.id
        const todo = await getTodo(todoID)
        const ids = ['title', 'content', 'done']
        map(ids, (id) => {
          setValue(id, get(todo, id))
        })
        setMode('edit')
      }
    }
    init()
  }, [router.isReady])

  // methods
  const onSubmit = async (form: any) => {
    setLoading(true)
    // フォームを送信
    if (isEditMode) {
      await updateTodo({
        id: router.query.id,
        ...form,
      })
    } else {
      await addTodo({
        ...form,
      })
    }

    if (isEditMode) {
      router.replace(`/todos/view/${router.query.id}`)
    } else {
      // フォーム完了後、一覧を更新
      const res: any = await getTodoList({
        limit: aggregate.limit,
      })

      setTodos(res.todos)
      // 入力内容をクリア
      resetForm()
      setLoading(false)
      setModal({ show: false })

      // route情報を更新
      setAggregate({
        ...aggregate,
        page: 1,
      })
      router.push(`/todos`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box py={6}>
        <Stack spacing={5}>
          <FormControl isInvalid={hasError}>
            <FormLabel>タイトル</FormLabel>
            <Input
              {...register('title', {
                required: 'タイトルは必須項目です',
              })}
            />
            {hasError && (
              <FormErrorMessage>{getErrorMsg('title')}</FormErrorMessage>
            )}
          </FormControl>
          {isEditMode && (
            <FormControl>
              <HStack>
                <FormLabel m={0} lineHeight={1}>
                  進捗
                </FormLabel>
                <Switch {...register('done')} />
              </HStack>
            </FormControl>
          )}

          <FormControl>
            <FormLabel>詳細</FormLabel>
            <Textarea minH={'2xs'} {...register('content')} />
          </FormControl>

          <Center pt={3}>
            <HStack spacing={6}>
              {isEditMode ? (
                <Link href={`/todos/view/${router.query.id}`}>
                  <Button>キャンセル</Button>
                </Link>
              ) : (
                <Button
                  onClick={() => {
                    setModal({ show: false })
                  }}
                >
                  キャンセル
                </Button>
              )}

              <Button type='submit' colorScheme={'blue'} isLoading={loading}>
                {isEditMode ? '上書き保存' : '保存する'}
              </Button>
            </HStack>
          </Center>
        </Stack>
      </Box>
    </form>
  )
}
