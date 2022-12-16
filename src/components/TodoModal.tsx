import { modalState } from '@/store/todos'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useRecoilState } from 'recoil'

export const TodoModal = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useRecoilState(modalState)
  const modalClose = () => {
    setModal({ show: false })
  }

  return (
    <Modal isOpen={modal.show} onClose={modalClose}>
      <ModalOverlay />
      <ModalContent minW={'2xl'}>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
