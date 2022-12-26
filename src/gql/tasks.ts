import { GraphQLClient } from 'graphql-request'
import { map } from 'lodash-es'
import useSWR from 'swr'

const endpoint = `https://api-ap-northeast-1.hygraph.com/v2/clajdh47k2mg501ujeoaa2ghj/master`
const client = new GraphQLClient(endpoint)

export const getters = {
  limit: 12,
  todos(data: any) {
    try {
      return map(data.todosConnection.edges, (i) => {
        return i.node
      })
    } catch (error) {
      return []
    }
  },
}

export const useTodoList = ({ page = 1 }: { page: number }) => {
  const { data, error } = useSWR(queryTodos({ page }), (query) =>
    client.request(query),
  )
  return {
    data,
    isLoading: !error && !data,
    error,
  }
}

export const queryTodos = ({ page }: { page: number }) => {
  const skip = getters.limit * (page - 1)
  return `query getTodos {
      todosConnection(first: ${getters.limit}, skip: ${skip}, orderBy: createdAt_DESC) {
        edges {
          node {
            id
            title
            done
            content
            createdAt
            updatedAt
          }
        }
        aggregate {
          count
        }
      }
    }
  `
}

export const addTask = async ({ title }: { title: string }) => {
  try {
    const queryAdd = `
      mutation addTodo {
        createTodo(data: { title: "${title}", done: true }) {
          id
        }
      }
    `
    const { createTodo } = await client.request(queryAdd)

    const queryPublish = `mutation publishTodo {
      publishTodo(where: { id: "${createTodo.id}" }) {
        id
      }
    }`
    const { publishTodo } = await client.request(queryPublish)
    return publishTodo
  } catch (error) {
    console.log({ error })
  }
}

export const deleteTask = async ({ id }: { id: string }) => {
  try {
    const query = `mutation deleteTodo {
      deleteTodo(where: { id: "${id}" }) {
        id
      }
    }`
    let { deleteTodo } = await client.request(query)
    return {
      deleteTodo,
    }
  } catch (error) {
    console.log({ error })
  }
}
