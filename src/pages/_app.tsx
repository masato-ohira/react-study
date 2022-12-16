import type { AppProps } from 'next/app'
import Head from 'next/head'

import { fonts } from '@/styles/fonts'
import { RecoilRoot } from 'recoil'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Layout } from '@/layouts/Layout'

const theme = extendTheme({
  fonts: {
    heading: `${fonts.sans}`,
    body: `${fonts.sans}`,
    enSans: `${fonts.enSans}`,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,viewport-fit=cover'
          />
          <meta
            name='format-detection'
            data-hid='format-detection'
            content='telephone=no,address=no,email=no'
          />
        </Head>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
