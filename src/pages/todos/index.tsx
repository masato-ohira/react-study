import type { NextPage } from 'next'

// components
import { TodoForm, TodoList, TodoAdd, TodoModal } from '@/components'

const TodoIndexPage: NextPage = () => {
  return (
    <>
      <TodoAdd />
      <TodoModal>
        <TodoForm />
      </TodoModal>
      <TodoList />
    </>
  )
}

export default TodoIndexPage
