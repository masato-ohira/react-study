import { Center, Button, Text, Stack, Tag, HStack, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { TodoProps, Markdown } from '@/components'
import dayjs from 'dayjs'

export const TodoDetail = ({ detail }: { detail: TodoProps }) => {
  return (
    <>
      <Box shadow={'md'} p={8} rounded={6}>
        <Stack spacing={4}>
          <Text m={0} fontSize={'3xl'} fontWeight={500}>
            {detail.title}
          </Text>
          <HStack spacing={8}>
            <Tag colorScheme={detail.done ? 'blue' : 'red'} p={1.5}>
              {detail.done ? '処理済' : '未対応'}
            </Tag>
            <HStack>
              <Tag p={1.5}>作成日時</Tag>
              <Text>{dayjs(detail.createdAt).format('YYYY/MM/DD HH:mm')}</Text>
            </HStack>
            <HStack>
              <Tag p={1.5}>更新日時</Tag>
              <Text>{dayjs(detail.updatedAt).format('YYYY/MM/DD HH:mm')}</Text>
            </HStack>
          </HStack>

          {detail.content && (
            <Box>
              <Markdown>{detail.content}</Markdown>
            </Box>
          )}
        </Stack>
        <Center pt={8}>
          <HStack spacing={6}>
            <Link href='/todos'>
              <Button>一覧に戻る</Button>
            </Link>
            <Link href={`/todos/edit/${detail.id}`}>
              <Button colorScheme={'blue'}>編集する</Button>
            </Link>
          </HStack>
        </Center>
      </Box>
    </>
  )
}
