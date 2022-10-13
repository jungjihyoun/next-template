import React from 'react'
import type { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'
import theme from '../styles/theme'
import { global } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
