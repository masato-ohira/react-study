import { Spinner, Flex } from '@chakra-ui/react'

export const LoaderContent = () => {
  return (
    <Flex justifyContent={'center'} minH={'50vh'} alignItems={'center'}>
      <Spinner color={'blue.300'}></Spinner>
    </Flex>
  )
}
