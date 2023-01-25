import { Html, Head, Main, NextScript } from 'next/document'

import { Header } from '../components/head'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <Header />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
