import { Html, Head, Main, NextScript } from 'next/document'
import {theme} from '../styles/theme'
import { ColorModeScript } from '@chakra-ui/react'
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <title>Dziki Wóz</title> */}
        </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
