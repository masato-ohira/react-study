import { atom } from 'recoil'

export const todoState = atom<any[]>({
  key: 'todoState',
  default: [],
})

export const todoAggregate = atom<{
  page: number
  limit: number
  count: number
}>({
  key: 'todoAggregate',
  default: {
    page: 1,
    limit: 10,
    count: 0,
  },
})

export const modalState = atom<{
  show: boolean
  id?: string
}>({
  key: 'modalState',
  default: {
    show: false,
  },
})
