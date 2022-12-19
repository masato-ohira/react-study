import { TodoDetail, TodoProps } from '@/components'
import { getTodo } from '@/gql/todos'
import { GetServerSidePropsContext } from 'next'
import { isString } from 'lodash-es'

const TodoId = ({ detail }: { detail: TodoProps }) => {
  return <TodoDetail detail={detail} />
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const todoId = query.id
  let detail = {}
  if (isString(todoId)) {
    detail = await getTodo(todoId)
  }
  return {
    props: { detail },
  }
}

export default TodoId
