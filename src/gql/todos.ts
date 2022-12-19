import { GraphQLClient, gql } from 'graphql-request'
import { map } from 'lodash-es'

const endpoint = `https://api-ap-northeast-1.hygraph.com/v2/clajdh47k2mg501ujeoaa2ghj/master`
const client = new GraphQLClient(endpoint)

export const getTodoList = async () => {
  try {
    const query = gql`
      {
        todosConnection(last: 9999, orderBy: createdAt_DESC) {
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
        }
      }
    `

    const { todosConnection } = await client.request(query)
    return map(todosConnection.edges, (i) => {
      return {
        ...i.node,
      }
    })
  } catch (error) {
    console.log({ error })
  }
}

export const getTodo = async (id: string) => {
  try {
    const query = gql`
      query GetTodo($id: ID!) {
        todo(where: { id: $id }) {
          id
          title
          content
          done
          createdAt
          updatedAt
        }
      }
    `
    let { todo } = await client.request(query, { id })
    return todo
  } catch (error) {
    console.log({ error })
  }
}

export const addTodo = async ({
  title,
  done = false,
  content,
}: {
  title: string
  done: Boolean
  content?: string
}) => {
  try {
    const query = gql`
      mutation addTodo($title: String!, $content: String, $done: Boolean!) {
        createTodo(data: { title: $title, content: $content, done: $done }) {
          id
        }
      }
    `
    const { createTodo } = await client.request(query, { title, content, done })
    const res = await publishTodo({ id: createTodo.id })
    return res
  } catch (error) {
    console.log({ error })
  }
}

export const publishTodo = async ({ id }: { id: string }) => {
  try {
    const query = gql`
      mutation publishTodo($id: ID!) {
        publishTodo(where: { id: $id }) {
          id
        }
      }
    `
    let { publishTodo } = await client.request(query, { id })
    return publishTodo
  } catch (error) {
    console.log({ error })
  }
}

export const updateTodo = async ({
  id,
  done,
  title,
  content,
}: {
  id: string
  done: boolean
  title?: string
  content?: string
}) => {
  try {
    const query = gql`
      mutation updateTodo(
        $id: ID!
        $done: Boolean
        $title: String
        $content: String
      ) {
        updateTodo(
          data: { done: $done, title: $title, content: $content }
          where: { id: $id }
        ) {
          id
        }
      }
    `
    const { updateTodo } = await client.request(query, {
      id,
      done,
      title,
      content,
    })
    const res = await publishTodo({ id: updateTodo.id })
    return res
  } catch (error) {
    console.log({ error })
  }
}

export const deleteTodo = async ({ id }: { id: string }) => {
  try {
    const query = gql`
      mutation deleteTodo($id: ID!) {
        deleteTodo(where: { id: $id }) {
          id
        }
      }
    `
    let { deleteTodo } = await client.request(query, { id })
    return {
      deleteTodo,
    }
  } catch (error) {
    console.log({ error })
  }
}
