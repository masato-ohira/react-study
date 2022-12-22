// import { useRouter } from 'next/router'
import { FC } from 'react'
import { Paginate as ChakraPaginate } from 'react-paginate-chakra-ui'
import { Center } from '@chakra-ui/react'

type PaginateProps = {
  page: number
  count: number
  limit?: number
  handlePageClick: Function
}
export const Paginate: FC<PaginateProps> = ({
  page = 1,
  count = 10,
  limit = 10,
  handlePageClick = () => {
    console.log('change page')
  },
}) => {
  // // const router = useRouter()
  // const [page, setPage] = useState(0)
  // const handlePageClick = (p: number) => setPage(p)

  return (
    <>
      <Center>
        <ChakraPaginate
          // required props 👇
          page={page}
          count={count}
          pageSize={limit}
          onPageChange={handlePageClick}
          // optional props 👇
          margin={2}
          shadow='lg'
          fontWeight={500}
          variant='outline'
          colorScheme={'blue'}
          w='full'
        />
      </Center>
    </>
  )
}
