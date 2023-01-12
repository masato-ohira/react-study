import { render, screen, cleanup, fireEvent } from '@testing-library/react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useRouter } from 'next/router'
// import axios from 'axios'

import IndexPage from './index'

const mockFn = jest.fn()
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
const useRouterMock = useRouter as any

// const getData = () => {}

// const handlers = [
//   axios.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
//     return res(ctx.status(200))
//   }),
// ]
// const server = setupServer(...handlers)
// beforeAll(() => {
//   server.listen()
// })
// afterEach(() => {
//   server.resetHandlers()
//   cleanup()
// })
// afterAll(() => {
//   server.close()
// })

describe('INDEX_PAGE_TEST', () => {
  it('記事表示チェック', async () => {
    useRouterMock.mockReturnValue({
      route: '/',
      pathname: '/',
      query: {
        page: 2,
      },
      asPath: '/',
      isReady: true,
      push: mockFn,
    })
    const { debug } = render(<IndexPage />)

    const res = await screen.findByText('2')
    debug(res)
  })
  // it('ページャーチェック', async () => {
  //   useRouterMock.mockReturnValue({
  //     route: '/',
  //     pathname: '/list/',
  //     query: {},
  //     asPath: '',
  //     isReady: true,
  //     push: mockFn,
  //   })
  //   const { debug } = render(<List />)
  //   const pager = await screen.findByLabelText('Page 2')
  //   debug(pager)
  //   expect(pager).toBeInTheDocument()
  //   fireEvent.click(pager)
  //   expect(mockFn).toBeCalledWith('/list/?page=2')
  //   expect(mockFn).toHaveBeenCalledTimes(1)
  //   mockFn.mockClear()
  // })
  // it('2ページ目', async () => {
  //   useRouterMock.mockReturnValue({
  //     query: {
  //       page: 2,
  //     },
  //     isReady: true,
  //   })
  //   render(<List />)
  //   const pager = await screen.findByText('Todos')
  //   expect(await screen.findByText('test6')).toBeInTheDocument()
  //   expect(await screen.findByText('test10')).toBeInTheDocument()
  // })
})
