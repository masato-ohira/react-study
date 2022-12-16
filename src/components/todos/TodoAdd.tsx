import { modalState } from '@/store/todos'
import { useRecoilState } from 'recoil'
import { Button } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'

export const TodoAdd = () => {
  const [modal, setModal] = useRecoilState(modalState)

  return (
    <Button
      mb={5}
      colorScheme={'blue'}
      leftIcon={<MdAdd size={24} />}
      onClick={() => {
        setModal({ show: true })
      }}
    >
      新規登録
    </Button>
  )
}
