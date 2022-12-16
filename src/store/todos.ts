import { atom } from 'recoil'

export const todoState = atom<any[]>({
  key: 'todoState',
  default: [],
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
