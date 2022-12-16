import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Flex, Box, Button, Stack, Container } from '@chakra-ui/react'
import Link from 'next/link'

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
    <Container
      className='l-container'
      minW={{
        base: '0',
        md: 'container.xl',
      }}
    >
      <Box
        className='l-flex'
        display={{
          base: 'block',
          md: 'flex',
        }}
        flexWrap={'wrap'}
        p={{
          base: 4,
          md: 8,
        }}
        columnGap={8}
      >
        <Box
          className='l-side'
          width={{
            base: '100%',
            md: '3xs',
          }}
        >
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
        <Box className='l-content' flex={1}>
          {children}
        </Box>
      </Box>
    </Container>
  )
}
