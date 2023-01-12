import { Box, Center, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const queryPage =
    router.isReady && router.query.page ? router.query.page : 'NULL'
  return (
    <>
      <Box fontFamily={'var(--chakra-fonts-enSans)'}>
        <Center>{queryPage}</Center>
        <Center textAlign={'center'} py={16}>
          <Text
            as='h1'
            fontSize={{
              base: '4xl',
              md: '7xl',
            }}
            lineHeight={1}
            fontWeight={700}
            letterSpacing={'-0.02em'}
          >
            Create accessible React
            <br />
            apps{' '}
            <Box
              as='span'
              fontStyle={'normal'}
              display={'inline'}
              color={'teal'}
            >
              with speed
            </Box>
          </Text>
        </Center>
        <Center textAlign={'center'}>
          <Text fontSize={'xl'} maxW={'lg'}>
            Chakra UI is a simple, modular and accessible component library that
            gives you the building blocks you need to build your React
            applications.
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default Home
