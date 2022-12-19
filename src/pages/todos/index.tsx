import type { NextPage } from 'next'

// components
import { TodoForm, TodoList, TodoAdd, TodoModal } from '@/components'

const Todos: NextPage = () => {
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

export default Todos
