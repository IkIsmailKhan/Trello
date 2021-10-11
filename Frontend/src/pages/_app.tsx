import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import ListProvider from '../store/List/Actions';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trello</title>
      </Head>
      <GlobalStyles />
      <ListProvider>
        <Component {...pageProps} />
      </ListProvider>
    </>
  )
}

export default App
