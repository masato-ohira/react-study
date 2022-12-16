import { Flex, Box, Button, Stack, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const menu = [
    { name: 'HOME', to: '/' },
    { name: 'TODOS', to: '/todos' },
  ]

  const isActive = (pathname: string) => {
    return pathname == router.pathname
  }

  return (
    <Container minWidth={'container.xl'}>
      <Flex flexWrap={'wrap'} p={8} columnGap={8}>
        <Box width={'3xs'}>
          <Stack spacing={4}>
            {menu.map((i, key) => {
              return (
                <Link href={i.to} key={key}>
                  <Button colorScheme={isActive(i.to) ? 'blue' : 'gray'}>
                    {i.name}
                  </Button>
                </Link>
              )
            })}
          </Stack>
        </Box>
        <Box flex={1}>{children}</Box>
      </Flex>
    </Container>
  )
}
