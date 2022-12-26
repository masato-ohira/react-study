import {
  HStack,
  FormControl,
  Button,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { addTask, queryTodos } from '@/gql/tasks'
import { useSWRConfig } from 'swr'
import { get } from 'lodash-es'
import { useState } from 'react'

export const TaskAdd = () => {
  const router = useRouter()
  const { mutate } = useSWRConfig()

  const [loading, setLoading] = useState(false)

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (form: any) => {
    // API疎通開始
    setLoading(true)
    await addTask({ title: form.title })

    // 状態更新
    mutate(queryTodos({ page: 1 }))

    // 後片付け
    setValue('title', undefined)
    setLoading(false)
    router.push({ query: { page: 1 } })
  }
  const hasError = (key: string) => {
    return errors && errors[key] ? true : false
  }

  return (
    <>
      <HStack mb={5}>
        <FormControl maxW={'sm'} isInvalid={hasError('title')}>
          <HStack position={'relative'}>
            <Input
              isDisabled={loading}
              {...register('title', {
                required: '必須項目です',
              })}
            />
          </HStack>
          <FormErrorMessage position={'absolute'} left={0} top={-9}>
            {hasError('title') && <>{get(errors, 'title.message')}</>}
          </FormErrorMessage>
        </FormControl>
        <Button
          colorScheme='blue'
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
        >
          タスクを追加
        </Button>
      </HStack>
    </>
  )
}
